import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';  // Use 'type' here
import axios from 'axios';

interface ForwardHistoryItem {
  n_id: number;
  dt_sending_time: string;
  s_plan_status: string;
  s_plan_status_chem: string;
  s_remarks: string;
  s_remark_by_name: string;
  n_remark_by_roleid: number;
  s_remark_type: string;
  n_remark_by_uid: number;
  s_fname: string;
}

interface ForwardHistoryState {
  data: ForwardHistoryItem[];
  loading: boolean;
  error: string | null;
}

const initialState: ForwardHistoryState = {
  data: [],
  loading: false,
  error: null,
};

// Create an async thunk for fetching forward history
export const fetchForwardHistory = createAsyncThunk(
  'forwardHistory/fetchForwardHistory',
  async (
    { application_id, reference_no, service_id }: { application_id: number; reference_no: string; service_id: number }
  ) => {
    const response = await axios.get(`http://localhost:4000/user/get_forward_history`, {
      params: { application_id, reference_no, service_id },
    });
    return response.data;
  }
);

const forwardHistorySlice = createSlice({
  name: 'forwardHistory',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchForwardHistory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchForwardHistory.fulfilled, (state, action: PayloadAction<ForwardHistoryItem[]>) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchForwardHistory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch forward history';
      });
  },
});

export default forwardHistorySlice.reducer;
