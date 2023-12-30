import { QUERY_KEYS } from '@/common/constants/queryKey.constants';
import { useQuery } from 'react-query';
import { getCurrent } from '../service';

export const useGetCurrent = () => {
  const { data: currentData, isLoading } = useQuery([QUERY_KEYS.CURRENT], () => getCurrent());

  return { currentData, isLoading };
};
