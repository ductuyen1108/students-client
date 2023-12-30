import { useMutation } from 'react-query';
import { IRegisterCallback } from '../interface';
import { register } from '../service';
export const useRegister = (callback: IRegisterCallback) => {
  return {
    ...useMutation(register, {
      onSuccess: () => {
        callback.onSuccess && callback.onSuccess();
      },
      onError: () => {
        callback.onError && callback.onError();
      },
    }),
  };
};
