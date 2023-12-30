import { useMutation } from 'react-query';
import { ICallback } from '@/app/(web)/tours/common/interface';
import { createPost } from '../service';

export const useCreatePost = (callback: ICallback) => {
  return useMutation(createPost, {
    onSuccess: () => {
      callback.onSuccess && callback.onSuccess();
    },
    onError: () => {
      callback.onError && callback.onError();
    },
  });
};
