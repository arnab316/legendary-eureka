import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "@/api/apiClient";
import Cookies from "js-cookie";

// ---------- TYPES ----------
export interface SupportiveApprovalPayload {
  u_id: number;
  verified_list: number[];
  n_service_id: number;
  n_factory_typeid: number;
  n_id: number;
  n_reference_number: number;
  n_rid: number;
  cafa_id: string;
}

interface SupportiveApprovalState {
  loading: boolean;
  success: boolean;
  error: string | null;
}

// ---------- INITIAL ----------
const initialState: SupportiveApprovalState = {
  loading: false,
  success: false,
  error: null,
};

// ---------- THUNK ----------
export const submitSupportiveApproval = createAsyncThunk<
  any,
  SupportiveApprovalPayload,
  { rejectValue: string }
>(
  "supportiveApproval/submit",
  async (payload, thunkAPI) => {
    try {
      const token = Cookies.get("token");
      if (!token) return thunkAPI.rejectWithValue("No authentication token found");

      const response = await apiClient.post(
        "/user/verify-supportive_docs_approval_plan",
        payload,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (response.data.success) return response.data;

      return thunkAPI.rejectWithValue(
        response.data.message || "Submission failed"
      );
    } catch (err: any) {
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || err.message || "Request failed"
      );
    }
  }
);

// ---------- SLICE ----------
const supportiveApprovalSlice = createSlice({
  name: "supportiveApproval",
  initialState,
  reducers: {
    resetSupportiveApprovalState: (state) => {
      state.loading = false;
      state.success = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitSupportiveApproval.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(submitSupportiveApproval.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(submitSupportiveApproval.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload || "Request failed";
      });
  },
});

export const { resetSupportiveApprovalState } = supportiveApprovalSlice.actions;
export default supportiveApprovalSlice.reducer;
