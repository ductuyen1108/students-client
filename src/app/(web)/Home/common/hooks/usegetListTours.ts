import { useQuery } from 'react-query';
import { IParamsTour } from '../interface';
import { QUERY_KEYS } from '@/common/constants/queryKey.constants';
import { getListTours } from '../service';

export const useGetListTours = (params: IParamsTour) => {
  const {
    data: listTourData,
    isLoading,
    isError,
    refetch,
  } = useQuery([QUERY_KEYS.LIST_TOURS], () => getListTours(params));

  return { listTourData, isLoading, isError, refetch };
};
