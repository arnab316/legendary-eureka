import { createSlice, createAsyncThunk, type PayloadAction } from "@reduxjs/toolkit";
import apiClient from "@/api/apiClient";
import Cookies from "js-cookie";

// -------- STATE TYPE --------
interface OwnerState {
  selected: any | null;
  loading: boolean;
  error: string | null;
}

// -------- INITIAL STATE --------
const initialState: OwnerState = {
  selected: null,
  loading: false,
  error: null,
};

// -------- ASYNC THUNK --------
export const fetchOwnerDetails = createAsyncThunk(
  "owner/fetchDetails",
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
const ownerSlice = createSlice({
  name: "owner",
  initialState,
  reducers: {
    setSelectedOwner: (state, action: PayloadAction<any>) => {
      state.selected = action.payload;
    },
    clearOwner: (state) => {
      state.selected = null;
      state.error = null;
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOwnerDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOwnerDetails.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.selected = action.payload;
      })
      .addCase(fetchOwnerDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

// -------- EXPORTS --------
export const { setSelectedOwner, clearOwner } = ownerSlice.actions;

export default ownerSlice.reducer;