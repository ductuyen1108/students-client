import { QUERY_KEYS } from '@/common/constants/queryKey.constants';
import { useQuery } from 'react-query';
import { getNewsDetailsBySlug } from '../service';

export const useGetNewsDetails = (slug: string) => {
  const { data: newsDetailsData, isLoading: isLoadingNewsDetails } = useQuery([QUERY_KEYS.NEWS_DETAILS, slug], () =>
    getNewsDetailsBySlug(slug),
  );

  return { newsDetailsData, isLoadingNewsDetails };
};
