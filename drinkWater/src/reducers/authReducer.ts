import { createSlice } from '@reduxjs/toolkit';

export interface AuthState {
  isAuth: boolean;
  isLoading: boolean;
}

export const initialState: AuthState = {
  isAuth: false,
  isLoading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logIn: (state) => {
      state.isAuth = true;
      state.isLoading = false;
    },
    isLoggingIn: (state) => {
      state.isLoading = true;
    },
  },
});

export const { logIn, isLoggingIn } = authSlice.actions;
export default authSlice.reducer;
