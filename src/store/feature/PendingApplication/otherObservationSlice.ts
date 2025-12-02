// src/store/irregularitySlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { submitIrregularitiesApi } from "@/api/PendingApplication/irrlegulatiesApi";

// ---------- TYPES ----------
interface IrregularityPayload {
  n_service_id: number;
  n_factory_typeid: number;
  n_id: number;
  n_reference_number: number;
  s_is_chemical: number;
  option: string;
  comments_irregularities_other: string;
  n_uid: number;
  remark_by_name: string;
  n_rid: number;
}

interface IrregularityState {
  loading: boolean;
  success: boolean;
  error: string | null;
}

// ---------- INITIAL STATE ----------
const initialState: IrregularityState = {
  loading: false,
  success: false,
  error: null,
};

// ---------- THUNK ----------
export const submitIrregularities = createAsyncThunk<
  any,
  IrregularityPayload,
  { rejectValue: string }
>("irregularities/submit", async (payload, thunkAPI) => {
  try {
    const response = await submitIrregularitiesApi(payload);

    if (response.data.success) {
      return response.data;
    }

    return thunkAPI.rejectWithValue(
      response.data.message || "Failed to submit irregularities"
    );
  } catch (err: any) {
    return thunkAPI.rejectWithValue(
      err.response?.data?.message || err.message || "Something went wrong"
    );
  }
});

// ---------- SLICE ----------
const irregularitySlice = createSlice({
  name: "irregularities",
  initialState,
  reducers: {
    resetIrregularitiesState: (state) => {
      state.loading = false;
      state.success = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitIrregularities.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(submitIrregularities.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(submitIrregularities.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Submit failed";
      });
  },
});

// ---------- EXPORTS ----------
export const { resetIrregularitiesState } = irregularitySlice.actions;
export default irregularitySlice.reducer;
