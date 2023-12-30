import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/common/redux/store';

type StateProps = {
  showPassword: boolean;
  showConfirmPassword: boolean;
};
const initialState: StateProps = {
  showPassword: false,
  showConfirmPassword: false,
};
export const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    setShowPassword: (state, action) => {
      state.showPassword = action.payload;
    },
    setShowConfirmPassword: (state, action) => {
      state.showConfirmPassword = action.payload;
    },
  },
});

export const { setShowPassword, setShowConfirmPassword } = registerSlice.actions;

export const showPasswordSelector = (state: RootState) => state.register.showPassword;

export const showConfirmPasswordSelector = (state: RootState) => state.register.showConfirmPassword;

export default registerSlice.reducer;
