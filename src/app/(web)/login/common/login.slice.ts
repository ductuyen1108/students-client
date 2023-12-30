import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/common/redux/store';

type StateProps = {
  username: string;
  showPassword: boolean;
  isExpired: boolean;
};
const initialState: StateProps = {
  showPassword: false,
  username: '',
  isExpired: false,
};
export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setShowPassword: (state, action) => {
      state.showPassword = action.payload;
    },
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setIsExpired: (state, action) => {
      state.isExpired = action.payload;
    },
  },
});

export const { setShowPassword, setUsername, setIsExpired } = loginSlice.actions;

export const showPasswordSelector = (state: RootState) => state.login.showPassword;
export const usernameSelector = (state: RootState) => state.login.username;
export const isExpiredSelector = (state: RootState) => state.login.isExpired;

export default loginSlice.reducer;
