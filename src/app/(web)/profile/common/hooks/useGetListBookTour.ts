import { IParamsBookTour } from '@/app/(web)/tours/[title]/common/interface';
import { getListBookTour } from '@/app/(web)/tours/[title]/common/service';
import { QUERY_KEYS } from '@/common/constants/queryKey.constants';
import { useQuery } from 'react-query';

export const useGetListBookTour = (params: IParamsBookTour) => {
  const { data: listBookTourData, isLoading: isLoadingBookTourData } = useQuery(
    [QUERY_KEYS.LIST_BOOK_TOUR, params],
    () => getListBookTour(params),
  );

  return { listBookTourData, isLoadingBookTourData };
};
