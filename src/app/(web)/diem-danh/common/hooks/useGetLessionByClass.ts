import { QUERY_KEYS } from '@/common/constants/queryKey.constants';
import { useQuery } from 'react-query';
import { IParamsLession } from '../interface';
import { getLessionByClass } from '../service';

export const useGetLessionByClass = (params: IParamsLession) => {
  const { data: scoreLessionData, isLoading: isLoadingLession } = useQuery([QUERY_KEYS.LESSION_BY_CLASS, params], () =>
    getLessionByClass(params),
  );

  return { scoreLessionData, isLoadingLession };
};
