import axiosClient from '@/common/utils/axios';
import { IParamsTour, IResTour, ITourItem } from './interface';
import { API_TOUR } from '@/common/constants/api.constants';

export const getListTours = (params: IParamsTour) => {
  return axiosClient.get<any, IResTour>(API_TOUR, {
    params,
  });
};

export const getTourDetailsById = (id: number) => {
  return axiosClient.get<any, ITourItem>(`${API_TOUR}/${id}`);
};
