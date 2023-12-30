import axiosClient from '@/common/utils/axios';
import { INewsItem, IParamsLatestNews } from './interface';
import { API_LATEST_NEWS, API_NEWS_DETAILS } from '@/common/constants/api.constants';

export const getLatestNews = (params: IParamsLatestNews) => {
  return axiosClient.get<any, INewsItem[]>(API_LATEST_NEWS, { params });
};

export const getNewsDetailsBySlug = (slug: string) => {
  return axiosClient.get<any, INewsItem>(`${API_NEWS_DETAILS}/${slug}`);
};
