import axiosClient from '@/common/utils/axios';
import { ICurrent } from './interface';
import { API_GET_CURRENT } from '@/common/constants/api.constants';

export const getCurrent = () => {
  return axiosClient.get<any, ICurrent>(API_GET_CURRENT);
};
