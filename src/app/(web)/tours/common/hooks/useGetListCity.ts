import { QUERY_KEYS } from '@/common/constants/queryKey.constants';
import { useQuery } from 'react-query';
import { IParamsCity } from '../interface';
import { getListCity } from '../service';

export const useGetListCity = (params: IParamsCity) => {
  const { data: listCityData, isLoading: isLoadingCityData } = useQuery([QUERY_KEYS.LIST_CITY, params], () =>
    getListCity(params),
  );

  return { listCityData, isLoadingCityData };
};
