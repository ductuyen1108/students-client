import * as Yup from 'yup';

export const ChangePassWordSchema = Yup.object().shape({
  password: Yup.string().required('Mật khẩu cũ không được trống'),
  newPassword: Yup.string().min(6, 'Mật khẩu ít nhất 6 ký tự').required('Mật khẩu mới không được trống'),
  confirmNewPassword: Yup.string().oneOf(
    [Yup.ref('newPassword'), undefined],
    'Mật khẩu mới và mật khẩu xác nhận phải giống nhau',
  ),
});
