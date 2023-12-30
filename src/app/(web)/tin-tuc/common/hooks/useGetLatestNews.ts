import { QUERY_KEYS } from '@/common/constants/queryKey.constants';
import { useQuery } from 'react-query';
import { IParamsLatestNews } from '../interface';
import { getLatestNews } from '../service';

export const useGetLatestNews = (params: IParamsLatestNews) => {
  const { data: listLatestNews, isLoading: isLoadingListLatestNews } = useQuery([QUERY_KEYS.LATEST_NEWS, params], () =>
    getLatestNews(params),
  );

  return { listLatestNews, isLoadingListLatestNews };
};
