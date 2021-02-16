import { createSlice } from '@reduxjs/toolkit';

export interface AuthState {
  isAuth: boolean;
  userToken?: string;
}

export const initialState: AuthState = {
  isAuth: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logIn: (state) => {
      state.isAuth = true;
    },
  },
});

export const { logIn } = authSlice.actions;
export default authSlice.reducer;
