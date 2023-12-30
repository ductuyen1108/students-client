import { QUERY_KEYS } from '@/common/constants/queryKey.constants';
import { useQuery } from 'react-query';
import { getProfile } from '../service';

export const useGetProfile = () => {
  const { data: profileData, isLoading: isLoadingData } = useQuery([QUERY_KEYS.PROFILE], () => getProfile());

  return { profileData, isLoadingData };
};
