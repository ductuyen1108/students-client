import { API_BOOK_TOUR } from '@/common/constants/api.constants';
import axiosClient from '@/common/utils/axios';
import { IBookTourForm, IParamsBookTour, IResBookTour } from './interface';

export const bookTour = (params: IBookTourForm) => {
  return axiosClient.post(API_BOOK_TOUR, params);
};

export const getListBookTour = (params: IParamsBookTour) => {
  return axiosClient.get<any, IResBookTour>(API_BOOK_TOUR, { params });
};

export const deleteBookTour = (id: number) => axiosClient.delete(`/customer/tour/cancel-book-tour${id}`);
