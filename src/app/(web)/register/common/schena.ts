import * as yup from 'yup';

export const schemaRegister = yup.object().shape({
  name: yup
    .string()
    .required('Họ và tên không được để trống')
    .matches(/^[^\d!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]+$/, 'Họ và tên không được chứa kí tự số hoặc kí tự đặc biệt'),
  phoneNumber: yup
    .string()
    .required('Số điện thoại không được để trống')
    .min(10, 'Số điện thoại phải có độ dài 10 ký tự')
    .max(10, 'Số điện thoại phải có độ dài 10 ký tự')
    .matches(/(03|05|07|08|09|01[2|6|8|9])+([0-9]{7,8})\b/, 'Số điện thoại không đúng định dạng'),
  password: yup.string().required('Mật khẩu không được để trống').min(3, 'Mật khẩu phải ít nhất 3 kí tự'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), undefined], 'Mật khẩu mới và mật khẩu xác nhận phải giống nhau'),
});
