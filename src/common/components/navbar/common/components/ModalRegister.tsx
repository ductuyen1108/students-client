'use client';

import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { Box, Checkbox, IconButton, InputAdornment, Stack, Typography } from '@mui/material';
import Iconify from '@/common/components/iconify/Iconify';
import { useRouter } from 'next/navigation';
import useShowSnackbar from '@/common/hooks/useShowSnackbar';
import { useDispatch, useSelector } from '@/common/redux/store';
import { useLogin } from '@/app/(web)/login/common/hooks/useLogin';
import { IDataLogin, IFormLogin, IResLogin } from '@/app/(web)/login/common/interface';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaLogin } from '@/app/(web)/login/common/schema';
import { FormProvider, RHFTextField } from '@/common/components/hook-form';
import { setShowPassword, setShowConfirmPassword } from '@/app/(web)/register/common/slice';
import { LoadingButton } from '@mui/lab';
import { GRAY_500, GRAY_600 } from '@/common/constants/colors';
import { setShowModalRegister } from '../slice';
import { useRegister } from '@/app/(web)/register/common/hooks/useRegister';
import { IDataSubmitRegister, IFormRegister } from '@/app/(web)/register/common/interface';
import { schemaRegister } from '@/app/(web)/register/common/schena';

export default function ModalRegister() {
  const { showModalRegister } = useSelector((state) => state.modal);
  const { showErrorSnackbar, showSuccessSnackbar } = useShowSnackbar();
  const { showPassword, showConfirmPassword } = useSelector((state) => state.register);
  const dispatch = useDispatch();
  const { mutate, isLoading } = useRegister({
    onSuccess: () => {
      showSuccessSnackbar('Đăng ký thành công');
      dispatch(setShowModalRegister(false));
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

  const handleClickOpen = () => {
    dispatch(setShowModalRegister(true));
  };

  const handleClose = () => {
    dispatch(setShowModalRegister(false));
  };

  return (
    <React.Fragment>
      <Button variant="outlined" sx={{ borderRadius: '24px' }} onClick={handleClickOpen} fullWidth>
        Đăng ký
      </Button>
      <Dialog
        open={showModalRegister}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Stack sx={{ padding: '70px 48px' }} spacing={3} alignItems={'center'} justifyContent={'center'}>
          <Iconify icon={'lets-icons:user-box-duotone'} width={100} height={100} color={'#96DEDA'} />
          <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={2} alignItems={'center'} justifyContent={'center'}>
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
                type={showConfirmPassword ? 'text' : 'password'}
                label={'Xác nhận mật khẩu'}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={() => dispatch(setShowConfirmPassword(!showConfirmPassword))} edge="end">
                        <Iconify icon={showConfirmPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Stack>
            <LoadingButton
              variant="outlined"
              loading={isLoading}
              type="submit"
              fullWidth
              sx={{ borderRadius: '24px', mt: 3 }}
            >
              Đăng ký
            </LoadingButton>
          </FormProvider>
        </Stack>
      </Dialog>
    </React.Fragment>
  );
}
