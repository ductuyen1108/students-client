import { useMutation } from 'react-query';
import { useSelector } from 'react-redux';
import { dispatch } from '@/common/redux/store';
import { setAccessToken, setLogin, setRefreshToken } from '../auth.slice';
import { ILoginCallback } from '../interface';
import { login } from '../service';

export const useAuthlogin = ({ onError, onSuccess }: ILoginCallback) => {
  return {
    ...useMutation(login, {
      onSuccess: (data) => {
        if (!data) return;
        const { accessToken, refreshToken } = data;
        dispatch(setAccessToken('Bearer ' + accessToken));
        dispatch(setRefreshToken(refreshToken));
        onSuccess && onSuccess();
      },
      onError: () => {
        onError && onError();
      },
    }),
  };
};
