import { Button, Stack } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useForm } from 'react-hook-form';
import { FormProvider } from '@/common/components/hook-form';
import Iconify from '@/common/components/iconify/Iconify';
import { dispatch } from '@/common/redux/store';
import { setDataFilter } from '../common/slice';
import { IParamsScore, IScoreStudentSubmitFilter } from '../common/interface';
import RHFSelectPagination from '@/common/components/hook-form/RHFSelectPagination';
import { useGetClassByScore } from '../common/hooks/useGetClassByScore';
import { useQueryClient } from 'react-query';
import { QUERY_KEYS } from '@/common/constants/queryKey.constants';

type Props = {
  onSetPage: (value: number) => void;
};

function ScoreStudentFilter({ onSetPage }: Props) {
  const queryClient = useQueryClient();
  const methods = useForm<IParamsScore>({
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

  const { classbyScoreData, isLoadingClassByScore } = useGetClassByScore();

  const optionClass = classbyScoreData?.map((item) => {
    return {
      id: item?.id,
      name: item?.className,
    };
  });

  console.log('options: ', optionClass);

  const onSubmit = (data: any) => {
    const dataFilter: IParamsScore = {
      classId: data?.classId?.id,
    };
    onSetPage(0);
    dispatch(setDataFilter(dataFilter));
    queryClient
      .getQueryCache()
      .findAll([QUERY_KEYS.SCORE_STUDENT])
      .forEach(({ queryKey }) => {
        queryClient.invalidateQueries(queryKey);
      });
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
