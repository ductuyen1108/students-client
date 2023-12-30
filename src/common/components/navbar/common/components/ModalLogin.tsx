'use client';

import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
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
import { setShowPassword } from '@/app/(web)/login/common/login.slice';
import { LoadingButton } from '@mui/lab';
import { GRAY_500, GRAY_600 } from '@/common/constants/colors';
import ModalRegister from './ModalRegister';
import { setShowModalLogin } from '../slice';

export default function ModalLogin() {
  const { push } = useRouter();
  const { showErrorSnackbar, showSuccessSnackbar } = useShowSnackbar();
  const { showModalLogin } = useSelector((state) => state.modal);
  const { showPassword } = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const { mutate, isLoading } = useLogin({
    onSuccess: (result: IResLogin) => {
      localStorage.setItem('token', result?.accessToken);
      showSuccessSnackbar('Đăng nhập thành công');
      dispatch(setShowModalLogin(false));
    },
    onError: (err: any) => {
      showErrorSnackbar('Số điện thoại hoặc mật khẩu không đúng!');
    },
  });

  const methods = useForm<IFormLogin>({
    resolver: yupResolver(schemaLogin),
    defaultValues: {
      phoneNumber: '',
      password: '',
    },
  });
  const {
    handleSubmit,
    formState: { errors, dirtyFields },
  } = methods;

  const onSubmit = (data: IFormLogin) => {
    const dataLogin: IDataLogin = {
      phoneNumber: data.phoneNumber,
      password: data.password,
    };
    mutate(dataLogin);
  };

  const handleClickOpen = () => {
    dispatch(setShowModalLogin(true));
  };

  const handleClose = () => {
    dispatch(setShowModalLogin(false));
  };

  return (
    <React.Fragment>
      <Button variant="outlined" sx={{ borderRadius: '24px' }} onClick={handleClickOpen}>
        Đăng nhập
      </Button>
      <Dialog
        open={showModalLogin}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Stack sx={{ padding: 3 }} spacing={3} alignItems={'center'} justifyContent={'center'}>
          <Iconify icon={'lets-icons:user-box-duotone'} width={100} height={100} color={'#96DEDA'} />
          <FormProvider
            methods={methods}
            onSubmit={handleSubmit(onSubmit)}
            style={{ width: '100%', padding: '0 24px' }}
          >
            <Stack spacing={2} width={'100%'}>
              <RHFTextField
                sx={{ '& .MuiFormLabel': { top: 0 } }}
                label="Số điện thoại"
                name="phoneNumber"
                size="small"
              />
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
              <Stack direction={'row'} spacing={1} alignItems={'center'}>
                <Checkbox sx={{ padding: '4px' }} />
                <Typography sx={{ fontSize: '14px', fontWeight: 300, color: GRAY_600 }}>Nhớ mật khẩu</Typography>
              </Stack>
            </Stack>
            <Stack spacing={3} mt="30px">
              <LoadingButton type="submit" variant="contained" fullWidth sx={{ padding: '10px', borderRadius: '24px' }}>
                Đăng nhập
              </LoadingButton>
              <Stack direction={'row'} spacing={1} alignItems={'center'}>
                <Box sx={{ width: '100%', height: '0.5px', background: GRAY_500 }} />
                <Typography sx={{ fontSize: '14px', fontWeight: 300, color: GRAY_600 }}>hoặc</Typography>
                <Box sx={{ width: '100%', height: '0.5px', background: GRAY_500 }} />
              </Stack>
              <ModalRegister />
            </Stack>
          </FormProvider>
        </Stack>
      </Dialog>
    </React.Fragment>
  );
}
