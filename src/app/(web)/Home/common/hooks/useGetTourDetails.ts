import { QUERY_KEYS } from '@/common/constants/queryKey.constants';
import { getTourDetailsById } from '../service';
import { useQuery } from 'react-query';

export const useGetTourDetails = (id: number) => {
  const { data: tourDetails, isLoading: isLoadingTourDetails } = useQuery([QUERY_KEYS.TOUR_DETAILS, id], () =>
    getTourDetailsById(id),
  );
  return { tourDetails, isLoadingTourDetails };
};
