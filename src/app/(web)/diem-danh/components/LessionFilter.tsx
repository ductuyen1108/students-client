import { Button, Stack } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useForm } from 'react-hook-form';
import { FormProvider } from '@/common/components/hook-form';
import Iconify from '@/common/components/iconify/Iconify';
import { dispatch } from '@/common/redux/store';
import { setDataFilter } from '../common/slice';
import { IParamsLession } from '../common/interface';
import RHFSelectPagination from '@/common/components/hook-form/RHFSelectPagination';
import { useGetClassByAttendance } from '../common/hooks/useGetClassByAttendance';

type Props = {
  onSetPage: (value: number) => void;
};

function ScoreStudentFilter({ onSetPage }: Props) {
  const methods = useForm<IParamsLession>({
    defaultValues: {
      classId: undefined,
    },
  });
  const {
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = methods;

  const { classbyAttendanceData, isLoadingClassByAttendance } = useGetClassByAttendance();

  const optionClass = classbyAttendanceData?.map((item) => {
    return {
      id: item?.id,
      name: item?.className,
    };
  });

  console.log('options: ', optionClass);

  const onSubmit = (data: any) => {
    const dataFilter: IParamsLession = {
      classId: data?.classId?.id,
    };
    onSetPage(0);
    dispatch(setDataFilter(dataFilter));
  };

  const handleClickDelete = () => {
    reset({
      classId: undefined,
    });
    dispatch(setDataFilter({ classId: undefined }));
  };

  return (
    <>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Stack direction="column" spacing={2} padding={2}>
          <Stack direction="row" spacing={3}>
            <RHFSelectPagination
              name="classId"
              labelProp="name"
              label="Tên lớp"
              options={optionClass || []}
              size="small"
              disableClear
            />
          </Stack>
          <Stack direction="row" spacing={3} sx={{ display: 'flex', justifyContent: 'flex-start' }}>
            <LoadingButton variant="contained" startIcon={<Iconify icon="humbleicons:search" />} type="submit">
              Tìm kiếm
            </LoadingButton>
            <Button
              variant="contained"
              color="inherit"
              startIcon={<Iconify icon="ic:baseline-clear" />}
              onClick={handleClickDelete}
            >
              Hủy
            </Button>
          </Stack>
        </Stack>
      </FormProvider>
    </>
  );
}

export default ScoreStudentFilter;
