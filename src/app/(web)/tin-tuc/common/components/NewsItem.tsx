'use client';

import { PRIMARY_MAIN } from '@/common/constants/colors';
import { Box, Typography, Button } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useRouter } from 'next/navigation';
import { INewsItem } from '../interface';
import { convertDate, convertSlug } from '@/common/utils/convertData';

interface Props {
  detail: INewsItem;
}

const NewsItem = ({ detail }: Props) => {
  const { push } = useRouter();
  return (
    <Box
      sx={{
        borderRadius: '5px',
        border: '1px solid #dce0e0',
        ':hover': {
          boxShadow: '0 22px 40px rgba(0,0,0,.15)',
          transform: 'translateY(-4px)',
          transitionDuration: '0.2s',
        },
      }}
    >
      <Link href={`/tin-tuc/${convertSlug({ data: detail?.title })}`}>
        <Image
          src={detail?.thumbnail.url}
          alt=""
          width={1000}
          height={950}
          style={{ width: '100%', height: '220px' }}
        />
      </Link>
      <Box sx={{ padding: '25px' }}>
        <Typography sx={{ fontSize: '12px', color: '#000000', fontWeight: 500, textTransform: 'uppercase' }}>
          {convertDate({ data: detail?.createdAt })}
        </Typography>
        <Typography
          sx={{
            fontSize: '22px',
            color: '#000000',
            fontWeight: 600,
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            WebkitLineClamp: 2,
            ':hover': { color: PRIMARY_MAIN, cursor: 'pointer' },
            mt: '5px',
          }}
          onClick={() => push(`/tin-tuc/${convertSlug({ data: detail?.title })}`)}
        >
          {detail?.title}
        </Typography>
        <Typography
          sx={{
            fontSize: '16px',
            fontWeight: 400,
            color: '#222222',
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            WebkitLineClamp: 2,
            my: '15px',
          }}
        >
          {detail?.newsDetails[0].description}
        </Typography>
        <Button
          variant="text"
          endIcon={<KeyboardArrowRightIcon />}
          onClick={() => push(`/tin-tuc/${convertSlug({ data: detail?.title })}`)}
        >
          Xem bài viết
        </Button>
      </Box>
    </Box>
  );
};

export default NewsItem;
