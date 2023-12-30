import * as yup from 'yup';

export const schemaCreatePost = yup.object().shape({
  title: yup.string().required('Tiêu đề không được để trống'),
  description: yup.string().required('Mô tả không được để trống').min(3, 'Mô tả phải ít nhất 3 kí tự'),
  content: yup.string().required('Nội dung không được để trống').min(3, 'Nội dung phải ít nhất 3 kí tự'),
  image: yup.mixed().required('Trường này không được để trống'),
});
