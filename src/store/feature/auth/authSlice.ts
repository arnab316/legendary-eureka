import { createSlice, createAsyncThunk,  type PayloadAction } from "@reduxjs/toolkit";
import { login } from "@/api/authApi";

interface User {
  id: number;
  username: string;
}

interface AuthState {
  user: User | null;
  token: string | null;
  loading: boolean;
  error: string | null;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  user: null,
  token: null,
  loading: false,
  error: null,
  isAuthenticated: false,
};

// Thunk for real login API
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (
    credentials: { username: string; password: string },
    thunkAPI
  ) => {
    try {
      const response = await login(credentials);

      if (response.status !== 200 || !response.user || !response.token) {
        return thunkAPI.rejectWithValue(response.message);
      }

      return response; // { user, token }
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message || "Login failed");
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
     setAuth: (state, action: PayloadAction<Partial<AuthState>>) => {
  Object.assign(state, action.payload);
},


    logoutUser: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.error = null;
      localStorage.removeItem("persist:root"); // clear persisted storage
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuthenticated = true;
      })
      .addCase(loginUser.rejected, (state, action: any) => {
        state.loading = false;
        state.error = action.payload || "Login failed";
      });
  },
});

export const { setAuth,logoutUser } = authSlice.actions;
export default authSlice.reducer;