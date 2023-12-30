'use client';

import { useState } from 'react';
import { Box, Typography, Stack, Rating } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { useRouter } from 'next/navigation';
import { PRIMARY_MAIN } from '@/common/constants/colors';
import FormatPrice from '@/common/config/price';

interface TourItemProps {
  id: number;
  thumbnail: string;
  price: number;
  title: string;
  country: string;
  totalReviews: number;
  numberOfDays: number;
  rate: number;
}

const TourItem = ({ id, thumbnail, price, title, country, totalReviews, numberOfDays, rate }: TourItemProps) => {
  const [isHover, setIsHover] = useState(false);
  const { push } = useRouter();
  return (
    <Box
      sx={{
        border: '1px solid #dce0e0',
        borderRadius: '5px',
        ':hover': {
          boxShadow: '0 22px 40px rgba(0,0,0,.15)',
          transform: 'translateY(-4px)',
          transitionDuration: '0.2s',
        },
      }}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <Box
        sx={{
          backgroundImage: `url(${thumbnail})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width: '100%',
          height: '280px',
          position: 'relative',
          cursor: 'pointer',
        }}
        onClick={() => push(`/tours/${id}`)}
      >
        <Box
          sx={{
            background: '#FF4A52',
            padding: '3px 10px',
            position: 'absolute',
            bottom: 20,
            transform: isHover ? 'scale(1.2)' : 'unset',
            transitionDuration: '0.2s',
          }}
        >
          <Typography sx={{ fontSize: '15px', color: '#fff', fontWeight: 600 }}>
            {FormatPrice({ price: price })}
          </Typography>
        </Box>
      </Box>
      <Box sx={{ p: '15px' }}>
        <Typography
          sx={{
            fontSize: '20px',
            fontWeight: 700,
            color: '#000',
            ':hover': { color: PRIMARY_MAIN, cursor: 'pointer' },
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            WebkitLineClamp: 1,
          }}
          onClick={() => push(`/tours/${id}`)}
        >
          {title}
        </Typography>
        <Typography sx={{ fontSize: '15px', fontWeight: 400, color: '#222', pt: '10px', pb: '15px' }}>
          {country}
        </Typography>
        <Stack justifyContent={'space-between'} alignItems={'center'} direction={'row'}>
          <Stack spacing={1} alignItems={'center'} direction={'row'}>
            <Rating name="size-small" defaultValue={rate} size="small" precision={0.5} readOnly />
            <Typography sx={{ fontSize: '12px', color: '#222222', fontWeight: 500 }}>{totalReviews} reviews</Typography>
          </Stack>
          <Stack spacing={1} alignItems={'center'} direction={'row'}>
            <AccessTimeIcon />
            <Typography sx={{ fontSize: '12px', color: '#222222', fontWeight: 500 }}>{numberOfDays} days</Typography>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default TourItem;
