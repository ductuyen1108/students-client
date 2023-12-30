import { useQuery } from 'react-query';
import { QUERY_KEYS } from '@/common/constants/queryKey.constants';
import { getListDistrictByProvinceId, getListProvince, getListWardByDistrictId } from '../service';

export const useGetProvinces = () => {
  const { data: dataProvinces, isLoading } = useQuery([QUERY_KEYS.LIST_PROVINCE], () => getListProvince());
  return {
    dataProvinces,
    isLoading,
  };
};

export const useGetDistrictByProvinceId = (id: string) => {
  const { data: dataDistrict, isLoading } = useQuery([QUERY_KEYS.LIST_DISTRICT, id], () =>
    getListDistrictByProvinceId(id),
  );
  return { dataDistrict, isLoading };
};

export const useGetWardByDistrictId = (id: string) => {
  const { data: dataWard, isLoading } = useQuery([QUERY_KEYS.LIST_WARD, id], () => getListWardByDistrictId(id));
  return { dataWard, isLoading };
};
