import axiosClient from '@/common/utils/axios';
import { IDataReview, IParamsCity, IResCity } from './interface';
import { API_CITY, API_USER_REVIEW } from '@/common/constants/api.constants';

export const getListCity = (params: IParamsCity) => {
  return axiosClient.get<any, IResCity>(API_CITY, { params });
};

export const userReview = (data: IDataReview) => {
  return axiosClient.post(API_USER_REVIEW, data);
};
