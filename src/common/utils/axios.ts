import axios, { AxiosRequestHeaders } from 'axios';
import { toQueryString } from '../constants/common.utils';
import { setAccessToken } from '@/app/(web)/login/common/auth.slice';
import { setIsExpired } from '@/app/(web)/login/common/login.slice';
// config
import { HOST_API } from '../config/hostApi';
import { store } from '../redux/store';

// ----------------------------------------------------------------------

const axiosClient = axios.create({
  baseURL: HOST_API,
  paramsSerializer: (param) => toQueryString(param),
});
const axiosClient2 = axios.create({
  baseURL: HOST_API,
});
axiosClient.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const { response } = error;
    const refreshToken = store.getState()?.authLogin.refreshToken;
    if (response?.status === 401 && !response?.data?.path?.includes('/login')) {
      axiosClient2
        .post<any, { accessToken: string }>('/student/auth/refresh-token', {
          refreshToken: refreshToken,
        })
        .then((res: any) => {
          store.dispatch(setAccessToken('Bearer ' + res?.data?.accessToken));
        })
        .catch((e) => {
          store.dispatch(setIsExpired(true));
          window.location.href = '/login';
        });
    }
    return Promise.reject(error);
  },
);
axiosClient.interceptors.request.use(async (config) => {
  const token = store.getState()?.authLogin.accessToken;
  if (token) {
    try {
      config.headers = {
        ...config.headers,
        Authorization: token,
      } as AxiosRequestHeaders;
    } catch (e) {
      console.log(e);
    }
  }
  return {
    ...config,
  };
});
export default axiosClient;
