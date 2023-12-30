'use client';

import { Typography, SxProps } from '@mui/material';
import { GRAY_600, GRAY_800, PRIMARY_LIGHT } from '../constants/colors';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonIcon from '@mui/icons-material/Person';
import { useRouter } from 'next/navigation';

interface TextProps {
  text: string;
  color?: string;
  path?: string;
}

const styledIcon: SxProps = {
  fontSize: '16px',
};

export const TitlePage = ({ text, color }: TextProps) => {
  return (
    <Typography sx={{ fontSize: { md: '35px', sm: '35px', xs: '25px' }, color: color, fontWeight: 800 }}>
      {text}
    </Typography>
  );
};

// Card tour
export const TitleTour = ({ text, color, path }: TextProps) => {
  const router = useRouter();
  return (
    <Typography
      sx={{
        width: 'fit-content',
        fontSize: { md: '25px', sm: '25px', xs: '23px' },
        color: color,
        fontWeight: 600,
        mb: '15px',
        ':hover': {
          color: PRIMARY_LIGHT,
        },
        cursor: 'pointer',
      }}
      onClick={() => router.push(`${path}`)}
    >
      {text}
    </Typography>
  );
};

export const TourName = ({ text, path }: TextProps) => {
  const router = useRouter();
  return (
    <Typography
      sx={{
        width: 'fit-content',
        fontSize: '20px',
        color: GRAY_800,
        fontWeight: 600,
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
        WebkitLineClamp: 1,
        ':hover': {
          color: PRIMARY_LIGHT,
        },
        cursor: 'pointer',
      }}
      onClick={() => router.push(`${path}`)}
    >
      {text}
    </Typography>
  );
};

export const Address = ({ text }: TextProps) => {
  return (
    <Typography
      sx={{ fontSize: '15px', color: GRAY_600, fontWeight: 500, display: 'flex', alignItems: 'center', gap: '5px' }}
    >
      <LocationOnIcon sx={styledIcon} /> Địa điểm: {text}
    </Typography>
  );
};

export const Schedule = ({ text }: TextProps) => {
  return (
    <Typography
      sx={{ fontSize: '15px', color: GRAY_600, fontWeight: 500, display: 'flex', alignItems: 'center', gap: '5px' }}
    >
      <AccessTimeIcon sx={styledIcon} /> Lịch trình: {text}
    </Typography>
  );
};

export const StartDate = ({ text }: TextProps) => {
  return (
    <Typography
      sx={{ fontSize: '15px', color: GRAY_600, fontWeight: 500, display: 'flex', alignItems: 'center', gap: '5px' }}
    >
      <CalendarMonthIcon sx={styledIcon} /> Khởi hành: {text}
    </Typography>
  );
};

export const RestUsers = ({ text }: TextProps) => {
  return (
    <Typography
      sx={{ fontSize: '15px', color: GRAY_600, fontWeight: 500, display: 'flex', alignItems: 'center', gap: '5px' }}
    >
      <PersonIcon sx={styledIcon} /> Số chỗ còn lại: {text}
    </Typography>
  );
};

export const Price = ({ text }: TextProps) => {
  return <Typography sx={{ fontSize: '18px', color: '#e30051', fontWeight: 700 }}>{text} đ</Typography>;
};

export const DescPage = ({ text, color }: TextProps) => {
  return (
    <Typography sx={{ fontSize: { md: '16px', sm: '16px', xs: '14px' }, color: color, fontWeight: 300 }}>
      {text}
    </Typography>
  );
};
