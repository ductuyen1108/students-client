import { useMutation, useQueryClient } from 'react-query';
import { QUERY_KEYS } from '@/common/constants/queryKey.constants';
import { editProfile } from '../service';
import { ICallback } from '@/app/(web)/tours/common/interface';

export const useEditProfile = (callback: ICallback) => {
  const queryClient = useQueryClient();
  return {
    ...useMutation(editProfile, {
      onSuccess: () => {
        queryClient.invalidateQueries([QUERY_KEYS.PROFILE]);

        callback.onSuccess && callback.onSuccess();
      },
      onError: () => {
        callback.onError && callback.onError();
      },
    }),
  };
};
