import axiosClient from '@/common/utils/axios';
import { IClassByScore, IParamsScore, IResScore } from './interface';
import { API_CLASS_BY_SCORE, API_SCORE } from '@/common/constants/api.constants';

export const getClassByScore = () => {
  return axiosClient.get<any, IClassByScore[]>(API_CLASS_BY_SCORE);
};

export const getStudentScore = (params: IParamsScore) => {
  return axiosClient.get<any, IResScore>(API_SCORE, { params });
};
