import slugify from 'slugify';
import { format } from 'date-fns';
import { vi } from 'date-fns/locale';

interface Props {
  data: string;
}

export const convertSlug = ({ data }: Props) => {
  return slugify(data, {
    replacement: '-',
    locale: 'vi',
    lower: false,
  });
};

export const convertDate = ({ data }: Props) => {
  if (data) {
    const parsedDate = new Date(data);
    return format(parsedDate, 'dd MMMM, yyyy', { locale: vi });
  } else {
    return 'chưa cập nhật';
  }
};

export const convertGender = (gender: string) => {
  switch (gender.toUpperCase()) {
    case 'MALE':
      return 'Nam';
    case 'FEMALE':
      return 'Nữ';
    default:
      return 'không xác định';
  }
};

export const convertDateString = (data: string) => {
  const date = new Date(data);
  const converttedDate = date.toLocaleString('vi-VN', { timeZone: 'UTC' });
  return converttedDate;
};
