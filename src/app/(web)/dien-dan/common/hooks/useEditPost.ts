import { useMutation, useQueryClient } from 'react-query';
import { QUERY_KEYS } from '@/common/constants/queryKey.constants';
import { editPost } from '../service';
import { ICallback } from '@/app/(web)/tours/common/interface';

export const useEditPost = (callback: ICallback) => {
  const queryClient = useQueryClient();
  return {
    ...useMutation(editPost, {
      onSuccess: () => {
        queryClient.invalidateQueries([QUERY_KEYS.LIST_POST]);

        callback.onSuccess && callback.onSuccess();
      },
      onError: () => {
        callback.onError && callback.onError();
      },
    }),
  };
};
