import axiosClient from '@/common/utils/axios';
import { IProfile, IDataFormEditProfile, IChangePassword, IDistrict, IProvince, IWard } from './interface';
import { API_PROFILE, API_DISTRICT, API_PROVINCE, API_WARD } from '@/common/constants/api.constants';

export const getProfile = () => {
  return axiosClient.get<any, IProfile>(API_PROFILE);
};

export const editProfile = (params: IDataFormEditProfile) => axiosClient.put(API_PROFILE, params);

export const eidtAvatarProfile = (params: { imageId: number }) => axiosClient.patch(`${API_PROFILE}/avatar`, params);

export const changePasswordProfile = (params: IChangePassword) =>
  axiosClient.patch(`${API_PROFILE}/update-password`, params);

export const getListProvince = () => {
  return axiosClient.get<unknown, IProvince[]>(`${API_PROVINCE}`);
};

export const getListDistrictByProvinceId = async (id: string) => {
  return axiosClient.get<unknown, IDistrict[]>(`${API_DISTRICT}/${id}`);
};

export const getListWardByDistrictId = async (id: string) => {
  return axiosClient.get<unknown, IWard[]>(`${API_WARD}/${id}`);
};
