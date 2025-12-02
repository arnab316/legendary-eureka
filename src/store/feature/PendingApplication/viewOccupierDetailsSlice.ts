import { createSlice, createAsyncThunk, type PayloadAction } from "@reduxjs/toolkit";
import apiClient from "@/api/apiClient";
import Cookies from "js-cookie";

// -------- STATE TYPE --------
interface OccupierState {
  selected: any | null;
  loading: boolean;
  error: string | null;
}

// -------- INITIAL STATE --------
const initialState: OccupierState = {
  selected: null,
  loading: false,
  error: null,
};

// -------- ASYNC THUNK --------
export const fetchOccupierDetails = createAsyncThunk(
  "occupier/fetchDetails",
  async (
    { app_id, personnel_type }: { app_id: number; personnel_type: string },
    thunkAPI
  ) => {
    try {
      const token = Cookies.get("token");
      if (!token) throw new Error("No authentication token found");

      const response = await apiClient.get(
        "/user/get_personnel_details",
        {
          headers: { Authorization: `Bearer ${token}` },
          params: {
            payload: JSON.stringify({ app_id, personnel_type }),
          },
        }
      );

      if (response.data.success && response.data.data) {
        return response.data.data.cafa_details?.[0] || null;
      } else {
        return thunkAPI.rejectWithValue(
          response.data.message || "Failed to fetch occupier details"
        );
      }
    } catch (err: any) {
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || err.message || "Failed to fetch data"
      );
    }
  }
);

// -------- SLICE --------
const occupierSlice = createSlice({
  name: "occupier",
  initialState,
  reducers: {
    setSelectedOccupier: (state, action: PayloadAction<any>) => {
      state.selected = action.payload;
    },
    clearOccupier: (state) => {
      state.selected = null;
      state.error = null;
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOccupierDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOccupierDetails.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.selected = action.payload;
      })
      .addCase(fetchOccupierDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

// -------- EXPORTS --------
export const { setSelectedOccupier, clearOccupier } = occupierSlice.actions;

export default occupierSlice.reducer;