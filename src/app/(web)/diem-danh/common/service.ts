import axiosClient from '@/common/utils/axios';
import { IClassByAttendance, IResLession, IParamsLession } from './interface';
import { API_CLASS_BY_ATTENDANCE, API_LESSION_BY_CLASS } from '@/common/constants/api.constants';

export const getClassByAttendance = () => {
  return axiosClient.get<any, IClassByAttendance[]>(API_CLASS_BY_ATTENDANCE);
};

export const getLessionByClass = (params: IParamsLession) => {
  return axiosClient.get<any, IResLession>(API_LESSION_BY_CLASS, { params });
};
