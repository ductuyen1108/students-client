import { useQuery } from 'react-query';
import { QUERY_KEYS } from '@/common/constants/queryKey.constants';
import { IParamsPost } from '../interface';
import { getListPost } from '../service';

export const useGetListPost = (params: IParamsPost) => {
  const { data: dataNewsPost, isLoading: isLoadingData } = useQuery(
    [QUERY_KEYS.LIST_POST, params],
    () => getListPost(params),
    {},
  );
  return { dataNewsPost, isLoadingData };
};
