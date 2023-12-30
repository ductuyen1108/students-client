import { QUERY_KEYS } from '@/common/constants/queryKey.constants';
import { useQuery } from 'react-query';
import { IParamsScore } from '../interface';
import { getStudentScore } from '../service';

export const useGetScoreStudent = (params: IParamsScore) => {
  const { data: scoreStudentData, isLoading: isLoadingScoreStudent } = useQuery([QUERY_KEYS.SCORE_STUDENT], () =>
    getStudentScore(params),
  );

  return { scoreStudentData, isLoadingScoreStudent };
};
