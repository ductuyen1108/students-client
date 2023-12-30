import { useQuery } from 'react-query';
import { QUERY_KEYS } from '@/common/constants/queryKey.constants';
import { getPostById } from '../service';

export function useGetPostById(id: number) {
  const { data: postData, isLoading } = useQuery([QUERY_KEYS.GET_POST_BY_ID, id], () => getPostById(id));

  return { postData, isLoading };
}
