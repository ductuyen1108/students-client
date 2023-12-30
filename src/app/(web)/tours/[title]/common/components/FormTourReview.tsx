'use client';

import { Box, Typography, Stack, InputBase, Button, Grid, styled, Rating } from '@mui/material';
import SendOutlined from '@mui/icons-material/SendOutlined';
import { FormProvider, RHFTextField } from '@/common/components/hook-form';
import { useForm } from 'react-hook-form';
import { IDataReview, ISubmitReview } from '../../../common/interface';
import { yupResolver } from '@hookform/resolvers/yup';
import { userReviewSchema } from '../schema';
import RHFRating from '@/common/components/hook-form/RHFRating';
import { LoadingButton } from '@mui/lab';
import { useUserReivew } from '../../../common/hooks/useUserReview';
import useShowSnackbar from '@/common/hooks/useShowSnackbar';
import { useDispatch } from '@/common/redux/store';
import { setShowModalLogin } from '@/common/components/navbar/common/slice';

const FormTourReview = ({ tourId }: { tourId?: number }) => {
  const token = localStorage.getItem('token');
  const { showSuccessSnackbar, showErrorSnackbar } = useShowSnackbar();
  const dispatch = useDispatch();
  const methods = useForm<ISubmitReview>({
    resolver: yupResolver(userReviewSchema),
    defaultValues: {
      reviewContent: '',
      accommodation: undefined,
      destination: undefined,
      meals: undefined,
      overall: undefined,
      transport: undefined,
      valueForMoney: undefined,
    },
  });
  const {
    handleSubmit,
    formState: { errors, dirtyFields, isSubmitting },
  } = methods;
  const { mutate } = useUserReivew({
    onSuccess: () => {
      showSuccessSnackbar('Gửi đánh giá thành công');
    },
    onError: () => {
      showErrorSnackbar('Bạn đã đánh giá tour du lịch này rồi');
    },
  });
  const onSubmit = (data: ISubmitReview) => {
    const dataReview: IDataReview = {
      tourId: tourId || 0,
      reviewContent: data.reviewContent,
      userReviewDetail: {
        accommodation: data.accommodation,
        destination: data.destination,
        meals: data.meals,
        overall: data.overall,
        transport: data.transport,
        valueForMoney: data.valueForMoney,
      },
    };
    if (token) {
      mutate(dataReview);
    } else {
      dispatch(setShowModalLogin(true));
    }
  };
  return (
    <Box mt="30px">
      <Typography sx={{ fontSize: '18px', color: '#000', fontWeight: 600 }}>Viết đánh giá</Typography>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3} sx={{ py: '30px', borderTop: '1px solid #dce0e0' }}>
          <RHFTextField name="reviewContent" multiline minRows={3} maxRows={5} label="Bình luận" />
          <Box>
            <Typography sx={{ fontSize: '16px', fontWeight: 300, color: '#000', mb: '30px' }}>
              Đánh giá của bạn về dịch vụ của chúng tôi qua các hạng mục:
            </Typography>
            <Grid container rowSpacing={3}>
              <Grid item container md={6}>
                <Grid item sm={6} xs={6}>
                  <Typography sx={{ fontSize: '14px', color: '#222', fontWeight: '500' }}>Chỗ ở</Typography>
                </Grid>
                <Grid item sm={6} xs={6}>
                  <RHFRating name="accommodation" size="small" sx={{ color: '#2ea2cc' }} />
                </Grid>
              </Grid>
              <Grid item container md={6}>
                <Grid item sm={6} xs={6}>
                  <Typography sx={{ fontSize: '14px', color: '#222', fontWeight: '500' }}>Điểm đến</Typography>
                </Grid>
                <Grid item sm={6} xs={6}>
                  <RHFRating name="destination" size="small" sx={{ color: '#2ea2cc' }} />
                </Grid>
              </Grid>
              <Grid item container md={6}>
                <Grid item sm={6} xs={6}>
                  <Typography sx={{ fontSize: '14px', color: '#222', fontWeight: '500' }}>Bữa ăn phục vụ</Typography>
                </Grid>
                <Grid item sm={6} xs={6}>
                  <RHFRating name="meals" size="small" sx={{ color: '#2ea2cc' }} />
                </Grid>
              </Grid>
              <Grid item container md={6}>
                <Grid item sm={6} xs={6}>
                  <Typography sx={{ fontSize: '14px', color: '#222', fontWeight: '500' }}>
                    Phương tiện di chuyển
                  </Typography>
                </Grid>
                <Grid item sm={6} xs={6}>
                  <RHFRating name="transport" size="small" sx={{ color: '#2ea2cc' }} />
                </Grid>
              </Grid>
              <Grid item container md={6}>
                <Grid item sm={6} xs={6}>
                  <Typography sx={{ fontSize: '14px', color: '#222', fontWeight: '500' }}>Giá trị tour</Typography>
                </Grid>
                <Grid item sm={6} xs={6}>
                  <RHFRating name="valueForMoney" size="small" sx={{ color: '#2ea2cc' }} />
                </Grid>
              </Grid>
              <Grid item container md={6}>
                <Grid item sm={6} xs={6}>
                  <Typography sx={{ fontSize: '14px', color: '#222', fontWeight: '500' }}>Tổng thể</Typography>
                </Grid>
                <Grid item sm={6} xs={6}>
                  <RHFRating name="overall" size="small" sx={{ color: '#2ea2cc' }} />
                </Grid>
              </Grid>
            </Grid>
          </Box>
          <LoadingButton
            type="submit"
            variant="contained"
            loading={isSubmitting}
            startIcon={<SendOutlined />}
            sx={{ width: 'fit-content', p: '10px 20px', marginTop: '20px' }}
          >
            Gửi đánh giá
          </LoadingButton>
        </Stack>
      </FormProvider>
    </Box>
  );
};

export default FormTourReview;
