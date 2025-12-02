import { createSlice, createAsyncThunk,type PayloadAction } from "@reduxjs/toolkit";
import apiClient from "@/api/apiClient";

interface ExtraLoadState {
  data: any | null;
  loading: boolean;
  error: string | null;
}

const initialState: ExtraLoadState = {
  data: null,
  loading: false,
  error: null,
};

// 🔥 Async Thunk for POST request
export const fetchExtraLoad = createAsyncThunk(
  "extraLoad/fetchExtraLoad",
  async (
    payload: {
      n_service_id: number;
      n_factory_typeid: number;
      n_id: number;
      n_reference_number: number;
    },
    { rejectWithValue }
  ) => {
    try {
      const response = await apiClient.post("/user/load-extra", payload);

      if (response.data?.success === false) {
        return rejectWithValue(response.data?.message || "API Error");
      }

      return response.data.data;
    } catch (error: any) {
      return rejectWithValue(error.message || "Something went wrong");
    }
  }
);

// ---------------- SLICE ----------------
const extraLoadSlice = createSlice({
  name: "extraLoad",
  initialState,
  reducers: {
    clearExtraLoad(state) {
      state.data = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchExtraLoad.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchExtraLoad.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchExtraLoad.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload || "Failed to load data";
      });
  },
});

// Export Reducer + Actions
export const { clearExtraLoad } = extraLoadSlice.actions;
export default extraLoadSlice.reducer;
