import { useMutation, useQueryClient } from 'react-query';
import { changePasswordProfile } from '../service';
import { ICallback } from '@/app/(web)/tours/common/interface';
import { QUERY_KEYS } from '@/common/constants/queryKey.constants';

export const useChangePassword = (callback: ICallback) => {
  const queryClient = useQueryClient();
  return {
    ...useMutation(changePasswordProfile, {
      onSuccess: (_result, variables) => {
        queryClient.invalidateQueries([QUERY_KEYS.UPDATE_PASSWORD]);

        callback.onSuccess && callback.onSuccess();
      },
      onError: () => {
        callback.onError && callback.onError();
      },
    }),
  };
};
