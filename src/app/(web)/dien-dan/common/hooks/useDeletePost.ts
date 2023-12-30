import { useMutation, useQueryClient } from 'react-query';
import { QUERY_KEYS } from '@/common/constants/queryKey.constants';
import { deletePost } from '../service';
import { ICallback } from '@/app/(web)/tours/common/interface';
import { IParamsDeletePost } from '../interface';

export function useDeletePost(callback: ICallback) {
  const queryClient = useQueryClient();
  return useMutation((params: IParamsDeletePost) => deletePost(params), {
    onSuccess: () => {
      queryClient
        .getQueryCache()
        .findAll([QUERY_KEYS.LIST_POST])
        .forEach(({ queryKey }) => {
          queryClient.invalidateQueries(queryKey);
        });
      callback.onSuccess && callback.onSuccess();
    },
    onError: () => {
      callback.onError && callback.onError();
    },
  });
}
