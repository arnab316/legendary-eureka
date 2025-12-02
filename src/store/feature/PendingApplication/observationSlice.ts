import { createSlice, createAsyncThunk, type PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

// Request parameters
export interface FetchObservationParams {
  application_id: number | string;
  service_id: number | string;
  factory_type_id: number | string;
  reference_number: string;
}

// Success response type
export interface ObservationResponse {
  success: boolean;
  message: string;
  statusCode: number;
  data: any; // put proper type if known
}

// Error response type
export interface ErrorResponse {
  message: string;
}

// Slice state type
export interface ObservationState {
  loading: boolean;
  data: any | null;     // type if you know exact structure
  error: string | null;
}

// ============================
// Thunk: Fetch Observation
// ============================
export const fetchObservation = createAsyncThunk<
  ObservationResponse,                // return type
  FetchObservationParams,             // argument type
  { rejectValue: ErrorResponse }      // error type
>(
  "observation/fetch",
  async (params, thunkAPI) => {
    try {
      const response = await axios.get<ObservationResponse>("/get_observation", {
        params,
      });
      return response.data;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(
        err.response?.data || { message: err.message }
      );
    }
  }
);

// ============================
// Slice
// ============================
const initialState: ObservationState = {
  loading: false,
  data: null,
  error: null,
};

const observationSlice = createSlice({
  name: "observation",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchObservation.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.data = null;
      })
      .addCase(
        fetchObservation.fulfilled,
        (state, action: PayloadAction<ObservationResponse>) => {
          state.loading = false;
          state.data = action.payload.data;
          state.error = null;
        }
      )
      .addCase(
        fetchObservation.rejected,
        (state, action: PayloadAction<any>) => {
          state.loading = false;
          state.data = null;
          state.error = action.payload?.message || "Failed to fetch observation";
        }
      );
  },
});

export default observationSlice.reducer;
