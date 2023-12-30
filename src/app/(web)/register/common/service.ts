import axiosClient from '@/common/utils/axios';
import { IDataSubmitRegister } from './interface';
import { API_REGISTER } from '@/common/constants/api.constants';

export const register = (data: IDataSubmitRegister) => {
  return axiosClient.post(API_REGISTER, data);
};
