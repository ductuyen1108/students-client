import { useMutation } from 'react-query';
import { userReview } from '../service';
import { ICallback } from '../interface';

export const useUserReivew = (callback: ICallback) => {
  return useMutation(userReview, {
    onSuccess: () => {
      callback.onSuccess && callback.onSuccess();
    },
    onError: () => {
      callback.onError && callback.onError();
    },
  });
};
