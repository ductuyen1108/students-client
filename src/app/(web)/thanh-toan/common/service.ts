import axiosClient from '@/common/utils/axios';
import { IDataPayment, IResPayment } from './interface';
import { API_PAYMENT } from '@/common/constants/api.constants';

export const payment = (data: IDataPayment) => {
  return axiosClient.post<any, IResPayment>(API_PAYMENT, data);
};
