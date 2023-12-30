import * as yup from 'yup';

export const schemaLogin = yup.object().shape({
  accountName: yup.string().required('Tài khoản không được để trống'),
  password: yup.string().required('Mật khẩu không được để trống').min(3, 'Mật khẩu phải ít nhất 3 kí tự'),
});
