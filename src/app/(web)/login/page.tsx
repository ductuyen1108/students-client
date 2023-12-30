'use client';

import { FormProvider, RHFTextField } from '@/common/components/hook-form';
import Iconify from '@/common/components/iconify/Iconify';
import { GRAY_500, GRAY_800, PRIMARY_MAIN } from '@/common/constants/colors';
import { IconButton, InputAdornment, Stack, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { IDataLogin, IFormLogin, IResLogin } from './common/interface';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaLogin } from './common/schema';
import { LoadingButton } from '@mui/lab';
import useShowSnackbar from '@/common/hooks/useShowSnackbar';
import { useAuthlogin } from './common/hooks/useLogin';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from '@/common/redux/store';
import { setShowPassword } from './common/login.slice';
import { DescPage, TitlePage } from '@/common/config/text';

const Login = () => {
  const { push } = useRouter();
  const { showErrorSnackbar, showSuccessSnackbar } = useShowSnackbar();
  const { showPassword } = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const { mutate, isLoading } = useAuthlogin({
    onSuccess: (result: IResLogin) => {
      localStorage.setItem('token', result?.accessToken);
      showSuccessSnackbar('Đăng nhập thành công');
      push('/');
    },
    onError: (err: any) => {
      showErrorSnackbar(err?.response?.data?.message);
    },
  });

  const methods = useForm<IFormLogin>({
    resolver: yupResolver(schemaLogin),
    defaultValues: {
      accountName: '',
      password: '',
    },
  });
  const {
    handleSubmit,
    formState: { errors, dirtyFields },
  } = methods;

  const onSubmit = (data: IFormLogin) => {
    const dataLogin: IDataLogin = {
      accountName: data.accountName,
      password: data.password,
    };
    mutate(dataLogin);
  };
  return (
    <Stack sx={{ mx: '50px' }} direction={{ sm: 'row', xs: 'column' }} justifyContent={'space-between'}>
      <Stack
        width={{ sm: '55%', xs: '100%' }}
        height={{ sm: '100vh', xs: '50vh' }}
        src={'/images/logo.png'}
        alt={`banner`}
        component={'img'}
      />
      <Stack width={{ sm: '40%', xs: '100%' }} sx={{ background: '#fff' }} justifyContent={'center'} spacing={2}>
        <Stack alignItems={'center'} justifyContent={'center'} spacing={1} px={4} mb={2}>
          <TitlePage text="Chào mừng đến với" color={GRAY_800} />
          <TitlePage text="Giáo xứ Cẩm Giang" color={PRIMARY_MAIN} />
        </Stack>
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)} style={{ width: '100%', padding: '0 24px' }}>
          <Stack spacing={2} width={'100%'}>
            <RHFTextField sx={{ '& .MuiFormLabel': { top: 0 } }} label="Tài khoản" name="accountName" size="small" />
            <RHFTextField
              name="password"
              type={showPassword ? 'text' : 'password'}
              label={'Mật khẩu'}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => dispatch(setShowPassword(!showPassword))} edge="end">
                      <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Stack>
          <Stack direction={'row'} spacing={3} mt="30px">
            <LoadingButton type="submit" variant="contained" fullWidth sx={{ padding: '10px' }}>
              Đăng nhập
            </LoadingButton>
          </Stack>
        </FormProvider>
      </Stack>
    </Stack>
  );
};

export default Login;
