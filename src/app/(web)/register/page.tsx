'use client';

import { FormProvider, RHFTextField } from '@/common/components/hook-form';
import useShowSnackbar from '@/common/hooks/useShowSnackbar';
import { Box, IconButton, InputAdornment, Stack } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useRegister } from './common/hooks/useRegister';
import { IDataSubmitRegister, IFormRegister } from './common/interface';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { schemaRegister } from './common/schena';
import { useDispatch, useSelector } from '@/common/redux/store';
import { setShowPassword } from './common/slice';
import Iconify from '@/common/components/iconify/Iconify';
import { setShowNewPassword } from '../profile/common/slice';

const Register = () => {
  const { push } = useRouter();
  const dispatch = useDispatch();
  const { showPassword, showConfirmPassword } = useSelector((state) => state.register);
  const { showErrorSnackbar, showSuccessSnackbar } = useShowSnackbar();
  const { mutate, isLoading } = useRegister({
    onSuccess: () => {
      showSuccessSnackbar('Đăng ký thành công');
      push('/');
    },
    onError: () => {
      showErrorSnackbar('Đăng ký thất bại');
    },
  });

  const methods = useForm<IFormRegister>({
    resolver: yupResolver(schemaRegister),
    defaultValues: {
      phoneNumber: '',
      password: '',
      name: '',
      confirmPassword: '',
    },
  });
  const {
    handleSubmit,
    formState: { errors, dirtyFields },
  } = methods;

  const onSubmit = (data: IFormRegister) => {
    const dataRegister: IDataSubmitRegister = {
      name: data.name,
      password: data.password,
      phoneNumber: data.phoneNumber,
    };
    mutate(dataRegister);
  };
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack direction={'row'} width={'100%'}>
        <Box
          component={'img'}
          width={'60%'}
          height={'100vh'}
          src="/images/home/destinations/ha-noi.jpg"
          alt=""
          sx={{ objectFit: 'cover' }}
        />
        <Stack spacing={2} alignItems={'center'} justifyContent={'center'} width={'40%'} padding={5}>
          <RHFTextField name="name" label="Họ và tên" />
          <RHFTextField name="phoneNumber" label="Số điện thoại" />
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
          <RHFTextField
            name="confirmPassword"
            type={showPassword ? 'text' : 'password'}
            label={'Xác nhận mật khẩu'}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => dispatch(setShowNewPassword(!showConfirmPassword))} edge="end">
                    <Iconify icon={showConfirmPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Stack>
      </Stack>
    </FormProvider>
  );
};

export default Register;
