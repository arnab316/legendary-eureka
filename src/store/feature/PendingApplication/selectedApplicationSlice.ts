import { createSlice, createAsyncThunk, type PayloadAction } from "@reduxjs/toolkit";
import apiClient from "@/api/apiClient";
import Cookies from "js-cookie";

// Type for your application state
interface ApplicationState {
  selected: any | null;
  loading: boolean;
  error: string | null;
}

// Initial state
const initialState: ApplicationState = {
  selected: null,
  loading: false,
  error: null,
};

// Async thunk to fetch application by ID
export const fetchApplicationById = createAsyncThunk(
  "selectedApplication/fetchById",
  async ({ username, filter, id, n_remark_by_roleid }: { username: string; filter: string; id: number,n_remark_by_roleid:number }, thunkAPI) => {
    try {
      const token = Cookies.get("token");
      if (!token) throw new Error("No authentication token found");

      const response = await apiClient.get("/user/get_approval_plan_by_id", {
        headers: { Authorization: `${token}` },
        params: {
          payload: JSON.stringify({ username, filter, id, n_remark_by_roleid:9 }),
        },
      });

      if (response.data.success && response.data.data) {
        return response.data.data.cafa_details[0]; // Assuming you want the first record
      } else {
        return thunkAPI.rejectWithValue(response.data.message || "Failed to fetch application");
      }
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.message || "Failed to fetch application");
    }
  }
);

const selectedApplicationSlice = createSlice({
  name: "selectedApplication",
  initialState,
  reducers: {
    setSelectedApplication: (state, action: PayloadAction<any>) => {
      state.selected = action.payload;
    },
    clearSelectedApplication: (state) => {
      state.selected = null;
      state.error = null;
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchApplicationById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchApplicationById.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.selected = action.payload;
      })
      .addCase(fetchApplicationById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setSelectedApplication, clearSelectedApplication } = selectedApplicationSlice.actions;
export default selectedApplicationSlice.reducer;
