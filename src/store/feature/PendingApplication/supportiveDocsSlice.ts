import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getSupportiveDocs } from "@/api/PendingApplication/supportingApi";

export interface SupportiveDocsParams {
  service_id: number;
  factory_type_id: number;
  application_id: number;
  role_id: number;
  userid: number;
  reference_no: number;
  cafa_id: string;
}

interface ApiDocumentItem {
  id: string;
  doc_master_id: number;
  document_name: string;
  upload_doc_type: string;
  latest: boolean;
  disable: boolean;
  checked: boolean;
  file_path:string|null;
}

interface ApiResponse {
  success: boolean;
  data: {
    title: string;
    plan_approval_details: string;
    application_status_description: string;
    plan_approve_status: string | null;
    plan_approve_status_chemical: string | null;
    tm_migrated_flag: string;
    remarks: {
      plan_status: string;
      chemical_plan_status: string | null;
      verify_details: string;
      doc_verify: string;
    };
    documents: ApiDocumentItem[];
  };
}

export const fetchSupportiveDocs = createAsyncThunk(
  "supportiveDocs/fetchSupportiveDocs",
  async (params: SupportiveDocsParams, { rejectWithValue }) => {
    try {
      const res = await getSupportiveDocs(params);

      console.log("🔍 API Response:", res.data);

      // Extract documents from the nested structure
      const documents = res.data?.data?.documents || [];

      console.log("✅ Extracted documents:", documents);

      return documents;
    } catch (err: any) {
      console.error("❌ Fetch Error:", err);
      return rejectWithValue(err.response?.data?.message || "Something went wrong");
    }
  }
);

export interface DocItem {
  n_id: number;
  n_doc_master_id: number;
  s_file_path: string | null;
  s_document_name: string;
  isChecked: boolean;     
  disable?: boolean;      
  latest?: boolean;
}

interface SupportiveDocsState {
  docsLoading: boolean;
  docsError: string | null;
  docs: DocItem[];
}

const initialState: SupportiveDocsState = {
  docsLoading: false,
  docsError: null,
  docs: [],
};
const supportiveDocsSlice = createSlice({
  name: "supportiveDocs",
  initialState,
  reducers: {
    resetDocs: (state) => {
      state.docs = [];
      state.docsError = null;
      state.docsLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSupportiveDocs.pending, (state) => {
        console.log("⏳ Fetching documents...");
        state.docsLoading = true;
        state.docsError = null;
      })
      .addCase(fetchSupportiveDocs.fulfilled, (state, action) => {
        console.log("✅ Documents fetched successfully:", action.payload);
        state.docsLoading = false;

        // Map API response fields to your expected format
        state.docs = action.payload.map((d: ApiDocumentItem) => ({
          n_id: parseInt(d.id),
          n_doc_master_id: d.doc_master_id,
          s_file_path: d.file_path,
          s_document_name: d.document_name,
          isChecked: d.checked,
          disable: d.disable,
          latest: d.latest,
        }));

        console.log("✅ Mapped docs in state:", state.docs);
      })
      .addCase(fetchSupportiveDocs.rejected, (state, action) => {
        console.error("❌ Fetch failed:", action.payload);
        state.docsLoading = false;
        state.docsError = action.payload as string;
      });
  },
});

export const { resetDocs } = supportiveDocsSlice.actions;
export default supportiveDocsSlice.reducer;