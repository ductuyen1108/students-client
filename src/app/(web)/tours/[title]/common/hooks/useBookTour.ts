import { useMutation } from 'react-query';
import { bookTour } from '../service';
import { ICallback } from '@/app/(web)/tours/common/interface';

export const useBookTour = (callback: ICallback) => {
  return {
    ...useMutation(bookTour, {
      onSuccess: (data) => {
        callback.onSuccess(data);
      },
      onError: (err: any) => {
        callback.onError(err);
      },
    }),
  };
};
