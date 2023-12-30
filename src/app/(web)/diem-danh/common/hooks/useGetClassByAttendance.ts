import { QUERY_KEYS } from '@/common/constants/queryKey.constants';
import { useQuery } from 'react-query';
import { getClassByAttendance } from '../service';

export const useGetClassByAttendance = () => {
  const { data: classbyAttendanceData, isLoading: isLoadingClassByAttendance } = useQuery(
    [QUERY_KEYS.CLASS_BY_ATTENDANCE],
    () => getClassByAttendance(),
  );

  return { classbyAttendanceData, isLoadingClassByAttendance };
};
