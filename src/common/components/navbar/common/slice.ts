import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/common/redux/store';

type StateProps = {
  showModalLogin: boolean;
  showModalRegister: boolean;
};
const initialState: StateProps = {
  showModalLogin: false,
  showModalRegister: false,
};
export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setShowModalLogin: (state, action) => {
      state.showModalLogin = action.payload;
    },
    setShowModalRegister: (state, action) => {
      state.showModalRegister = action.payload;
    },
  },
});

export const { setShowModalRegister, setShowModalLogin } = modalSlice.actions;

export const showModalLogin = (state: RootState) => state.modal.showModalLogin;
export const showModalRegister = (state: RootState) => state.modal.showModalRegister;

export default modalSlice.reducer;
