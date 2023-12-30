import { useMutation } from 'react-query';
import { payment } from '../service';
import { IPaymentCallback } from '../interface';

export const usePayment = (callback: IPaymentCallback) => {
  return useMutation(payment, {
    onSuccess: (result) => {
      callback.onSuccess(result);
    },
    onError: (err: any) => {
      callback.onError(err);
    },
  });
};
