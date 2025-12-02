import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getSupportiveDocs } from "@/api/PendingApplication/supportingApi";

// Thunk to fetch supportive docs
export const fetchSupportiveDocs = createAsyncThunk(
  "supportiveDocs/fetchSupportiveDocs",
  async (
    params: {
      cafa_id: string;
      id: number;
      n_remark_by_roleid: number;
    },
    { rejectWithValue }
  ) => {
    try {
     
            const res = await getSupportiveDocs(params);
      return res.data.data; // Array of docs
    } catch (err: any) {
      return rejectWithValue(err.response?.data || "Something went wrong");
    }
  }
);

// TYPE DEFINITIONS
interface DocItem {
  n_id: number;
  n_doc_master_id: number;
  s_file_path: string | null;
  s_document_name: string;
  isChecked: boolean;
}

interface SupportiveDocsState {
  docsLoading: boolean;
  docsError: string | null;
  docs: DocItem[];
}

// INITIAL STATE
const initialState: SupportiveDocsState = {
  docsLoading: false,
  docsError: null,
  docs: [],
};

// SLICE
const supportiveDocsSlice = createSlice({
  name: "supportiveDocs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSupportiveDocs.pending, (state) => {
        state.docsLoading = true;
        state.docsError = null;
      })
      .addCase(fetchSupportiveDocs.fulfilled, (state, action) => {
        state.docsLoading = false;
        state.docs = action.payload;
      })
      .addCase(fetchSupportiveDocs.rejected, (state, action) => {
        state.docsLoading = false;
        state.docsError = action.payload as string;
      });
  },
});

export default supportiveDocsSlice.reducer;
