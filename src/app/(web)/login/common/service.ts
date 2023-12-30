import axiosClient from '@/common/utils/axios';
import { IDataLogin, IResLogin } from './interface';
import { API_LOGIN } from '@/common/constants/api.constants';

export const login = (data: IDataLogin) => {
  return axiosClient.post<any, IResLogin>(API_LOGIN, data);
};
