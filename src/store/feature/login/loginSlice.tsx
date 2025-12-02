import { createSlice, createAsyncThunk, type PayloadAction } from '@reduxjs/toolkit';
import {type LoginState} from '../../../types';


const initialState: LoginState = {
    username: '',
    password: '',
    loading: false,
    error: null,
};

// Create an async thunk for login
export const loginUser = createAsyncThunk(
    'login/loginUser',
    async(credentials: LoginState) => {
        // Simulate an API call using axios or fetch

        const response = await new Promise<{ success: boolean }>((resolve) => {
            setTimeout(() => resolve({ success: true }), 1000);
        });
        if (!response.success) {
            throw new Error('Login failed');
        }
        return credentials;
    }
);

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        clearCredentials: (state) => {
            state.username = '';
            state.password = '';
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action: PayloadAction<LoginState>) => {
                state.username = action.payload.username;
                state.password = action.payload.password;
                state.loading = false;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Login failed';
            });
    },
});

export const { clearCredentials } = loginSlice.actions;
export default loginSlice.reducer;