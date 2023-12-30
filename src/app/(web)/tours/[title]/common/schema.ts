import * as yup from 'yup';

export const bookTourSchema = yup.object().shape({
  name: yup.string().required('Vui lòng nhập họ và tên').max(128),
  email: yup.string().required('Vui lòng nhập email').email('Vui lòng nhập đúng định dạng email'),
  phoneNumber: yup
    .string()
    .required('Vui lòng nhập số điện thoại')
    .matches(/^[0-9]{10}$/, 'Số điện thoại không hợp lệ'),
  numberOfPeople: yup.number().required('Vui lòng nhập số người').typeError('Vui lòng chỉ nhập số người'),
});

export const userReviewSchema = yup.object().shape({
  reviewContent: yup.string().required('Vui lòng nhập nội dung đánh giá'),
  accommodation: yup.number().required('Vui lòng chọn số sao theo đánh giá của bạn'),
  destination: yup.number().required('Vui lòng chọn số sao theo đánh giá của bạn'),
  meals: yup.number().required('Vui lòng chọn số sao theo đánh giá của bạn'),
  transport: yup.number().required('Vui lòng chọn số sao theo đánh giá của bạn'),
  valueForMoney: yup.number().required('Vui lòng chọn số sao theo đánh giá của bạn'),
  overall: yup.number().required('Vui lòng chọn số sao theo đánh giá của bạn'),
});
