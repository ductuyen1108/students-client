import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/common/redux/store';
import { StateProps } from '../common/interface';

const initialState: StateProps = {
  showNewPassword: false,
  showOldPassword: false,
};
export const profileSLice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setShowOldPassword: (state, action: PayloadAction<boolean>) => {
      state.showOldPassword = action.payload;
    },
    setShowNewPassword: (state, action: PayloadAction<boolean>) => {
      state.showNewPassword = action.payload;
    },
  },
});

export const { setShowNewPassword, setShowOldPassword } = profileSLice.actions;

export const merchantShowOldSelector = (state: RootState) => state.profile.showOldPassword;
export const merchantShowNewSelector = (state: RootState) => state.profile.showNewPassword;

export default profileSLice.reducer;
