'use client';

import { Box, Stack, Typography, InputBase, Button, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useForm } from 'react-hook-form';
import { IBookTourForm, ISubmitFormBookTour } from '../interface';
import { bookTourSchema } from '../schema';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, RHFTextField } from '@/common/components/hook-form';
import { useBookTour } from '../hooks/useBookTour';
import useShowSnackbar from '@/common/hooks/useShowSnackbar';
import { useRouter } from 'next/navigation';
import { useDispatch } from '@/common/redux/store';
import { setShowModalLogin } from '@/common/components/navbar/common/slice';
import { setDataPayment } from '@/app/(web)/thanh-toan/common/slice';
import { randomText } from '@/common/utils/randomText';

const TourSubmitForm = ({ price, tourId }: { price: number; tourId: number }) => {
  const { push } = useRouter();
  const token = localStorage.getItem('token');
  const dispatch = useDispatch();
  const methods = useForm<ISubmitFormBookTour>({
    resolver: yupResolver(bookTourSchema),
  });
  const {
    handleSubmit,
    reset,
    watch,
    formState: { isSubmitting, errors },
  } = methods;
  const { showErrorSnackbar, showSuccessSnackbar } = useShowSnackbar();
  const { mutate } = useBookTour({
    onSuccess: () => {
      showSuccessSnackbar('Đặt tour du lịch thành công!');
      push(`/thanh-toan/${tourId}`);
      reset();
    },
    onError: () => {
      showErrorSnackbar('Bạn đã đặt tour này rồi!!!');
      reset();
    },
  });
  const onSubmit = (data: ISubmitFormBookTour) => {
    const dataBookTour: IBookTourForm = {
      tourId: tourId,
      numberOfPeople: data.numberOfPeople,
    };
    if (token) {
      mutate(dataBookTour);
    } else {
      dispatch(setShowModalLogin(true));
    }
  };
  return (
    <Box>
      <Stack
        direction={'row'}
        justifyContent={'space-between'}
        alignItems={'center'}
        sx={{ background: 'rgba(0,0,0,.8)', p: '10px 15px 10px 15px', borderRadius: '5px 5px 0 0' }}
      >
        <Typography sx={{ fontSize: '24px', fontWeight: 600, color: '#fff' }}>
          {price.toLocaleString('vi-VN')} đ
        </Typography>
        <Typography sx={{ fontSize: '16px', fontWeight: 400, color: '#fff' }}>Mỗi Người</Typography>
      </Stack>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3} sx={{ borderRadius: '0 0 5px 5px', p: '30px 20px', border: '1px solid #dce0e0' }}>
          <RHFTextField name="name" label="Họ và tên" />
          <RHFTextField name="email" label="Địa chỉ email" />
          <RHFTextField name="phoneNumber" label="Số điện thoại" />
          <RHFTextField name="numberOfPeople" label="Số người tham gia" />
          <LoadingButton loading={isSubmitting} type="submit" variant="contained" sx={{ py: '8px' }}>
            Đặt tour
          </LoadingButton>
        </Stack>
      </FormProvider>
    </Box>
  );
};

export default TourSubmitForm;
