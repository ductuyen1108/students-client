import { useMutation, useQueryClient } from 'react-query';
import { QUERY_KEYS } from '@/common/constants/queryKey.constants';
import { deleteBookTour } from '../service';
import { ICallback } from '../../../common/interface';

export function useDeleteBookTour(callback: ICallback) {
  const queryClient = useQueryClient();
  return useMutation((id: number) => deleteBookTour(id), {
    onSuccess: () => {
      queryClient
        .getQueryCache()
        .findAll([QUERY_KEYS.LIST_BOOK_TOUR])
        .forEach(({ queryKey }) => {
          queryClient.invalidateQueries(queryKey);
        });
      callback.onSuccess && callback.onSuccess();
    },
    onError: () => {
      callback.onError && callback.onError();
    },
    retry: 2,
  });
}
