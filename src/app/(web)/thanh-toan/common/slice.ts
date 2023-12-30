import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IInitialPaymentState, ISubmitDataPayment } from './interface';
import { defaultDataPayment } from './constant';
import { RootState } from '@/common/redux/store';

const initialState: IInitialPaymentState = {
  dataPayment: defaultDataPayment,
};

const paymentSLice = createSlice({
  name: 'payment',
  initialState: initialState,
  reducers: {
    setDataPayment: (state, action: PayloadAction<ISubmitDataPayment>) => {
      state.dataPayment = action.payload;
    },
  },
});

export const { setDataPayment } = paymentSLice.actions;

export const dataPayment = (state: RootState) => state.payment.dataPayment;

export default paymentSLice.reducer;
