import { QUERY_KEYS } from '@/common/constants/queryKey.constants';
import { useQuery } from 'react-query';
import { getClassByScore } from '../service';

export const useGetClassByScore = () => {
  const { data: classbyScoreData, isLoading: isLoadingClassByScore } = useQuery([QUERY_KEYS.CLASS_BY_SCORE], () =>
    getClassByScore(),
  );

  return { classbyScoreData, isLoadingClassByScore };
};
