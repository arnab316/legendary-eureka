import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './feature/login/loginSlice';
// Create the Redux store
export const store = configureStore({
  reducer: {
    login: loginReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
