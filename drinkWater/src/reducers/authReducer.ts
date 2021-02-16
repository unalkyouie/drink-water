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
    isLoggedOut: (state) => {
      state.isAuth = false;
      state.isLoading = false;
    },
  },
});

export const { logIn, isLoggingIn, isLoggedOut } = authSlice.actions;
export default authSlice.reducer;
