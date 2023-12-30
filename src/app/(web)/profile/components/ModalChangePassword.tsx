import { FormProvider, RHFTextField } from '@/common/components/hook-form';
import { Button, Dialog, DialogActions, DialogTitle, IconButton, InputAdornment, Stack } from '@mui/material';
import { useState } from 'react';
import { useChangePassword } from '../common/hooks/useChangePassword';
import useShowSnackbar from '@/common/hooks/useShowSnackbar';
import { useForm } from 'react-hook-form';
import { IChangePassword, ISubmitChangePassword } from '../common/interface';
import { ChangePassWordSchema } from '../common/schema';
import { useDispatch, useSelector } from '@/common/redux/store';
import Iconify from '@/common/components/iconify/Iconify';
import { setShowNewPassword, setShowOldPassword } from '../common/slice';
import { LoadingButton } from '@mui/lab';
import { defaultValues } from '../common/constant';
import { yupResolver } from '@hookform/resolvers/yup';

const ModalChangePassword = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const { showNewPassword, showOldPassword } = useSelector((state) => state.profile);
  const { showSuccessSnackbar, showErrorSnackbar } = useShowSnackbar();
  const { mutate } = useChangePassword({
    onSuccess: () => {
      showSuccessSnackbar('Đổi mật khẩu thành công');
      setOpen(false);
    },
    onError: () => {
      showErrorSnackbar('Đổi mật khẩu thất bại');
    },
  });
  const methods = useForm<ISubmitChangePassword>({
    defaultValues: defaultValues,
    resolver: yupResolver(ChangePassWordSchema),
  });
  const {
    handleSubmit,
    reset,
    watch,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = (data: ISubmitChangePassword) => {
    const dateChange: IChangePassword = {
      newPassword: data.newPassword,
      password: data.password,
    };
    mutate(dateChange);
    reset({ newPassword: '', password: '', confirmNewPassword: '' });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    reset({ newPassword: '', password: '', confirmNewPassword: '' });
  };
  return (
    <Stack>
      <Button variant="outlined" onClick={handleClickOpen} sx={{ borderRadius: '10px' }}>
        Đổi mật khẩu
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <Stack spacing={2} p={3} textAlign={'center'}>
          <DialogTitle>{'Đổi mật khẩu'}</DialogTitle>
          <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={2}>
              <RHFTextField
                name="password"
                type={showOldPassword ? 'text' : 'password'}
                label={'Mật khẩu cũ'}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={() => dispatch(setShowOldPassword(!showOldPassword))} edge="end">
                        <Iconify icon={showOldPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <RHFTextField
                name="newPassword"
                type={showNewPassword ? 'text' : 'password'}
                label={'Mật khẩu mới'}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={() => dispatch(setShowNewPassword(!showNewPassword))} edge="end">
                        <Iconify icon={showNewPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <RHFTextField
                name="confirmNewPassword"
                type={showNewPassword ? 'text' : 'password'}
                label={'Xác nhận mật khẩu mới'}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={() => dispatch(setShowNewPassword(!showNewPassword))} edge="end">
                        <Iconify icon={showNewPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <DialogActions>
                <Button variant="outlined" onClick={handleClose}>
                  Hủy
                </Button>
                <LoadingButton loading={isSubmitting} type="submit" variant="contained" autoFocus>
                  Xác nhận
                </LoadingButton>
              </DialogActions>
            </Stack>
          </FormProvider>
        </Stack>
      </Dialog>
    </Stack>
  );
};

export default ModalChangePassword;
