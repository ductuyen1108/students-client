import { useMutation, useQueryClient } from 'react-query';
import { QUERY_KEYS } from '@/common/constants/queryKey.constants';
import { eidtAvatarProfile } from '../service';
import { ICallback } from '@/app/(web)/tours/common/interface';

export const useEditAvatarProfile = (callback: ICallback) => {
  const queryClient = useQueryClient();
  return {
    ...useMutation(eidtAvatarProfile, {
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
