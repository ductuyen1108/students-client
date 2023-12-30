import axiosClient from '@/common/utils/axios';
import { IDataEditPost, IDataFormCreatePost, IParamsDeletePost, IParamsPost, IPost, IResPost } from './interface';
import { API_POST } from '@/common/constants/api.constants';

export const getListPost = (params: IParamsPost) => {
  return axiosClient.get<any, IResPost>(API_POST, { params });
};

export const getPostById = (id: number) => {
  return axiosClient.get<any, IPost>(`${API_POST}/${id}`);
};

export const createPost = (data: IDataFormCreatePost) => {
  return axiosClient.post(API_POST, data);
};

export const editPost = (data: IDataEditPost) => axiosClient.put(API_POST, data);

export const deletePost = (params: IParamsDeletePost) =>
  axiosClient.delete(API_POST, {
    data: params,
  });
