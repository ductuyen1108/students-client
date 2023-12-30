import { GRAY_100, GRAY_500, GRAY_800, PRIMARY_MAIN } from '@/common/constants/colors';
import { Box, Stack, Typography } from '@mui/material';

const NewsCreatedByUser = () => {
  return (
    <Stack
      sx={{
        borderRadius: '10px',
        padding: 3,
        border: '1px solid rgba(145, 158, 171, 0.24)',
        ':hover': {
          border: `1px solid ${PRIMARY_MAIN}`,
        },
        cursor: 'pointer',
      }}
    >
      <Stack spacing={3} direction={'row'} alignItems={'center'}>
        <Box
          component={'img'}
          src="/images/home/destinations/ha-noi.jpg"
          alt=""
          width={'80px'}
          height={'80px'}
          sx={{ borderRadius: '10px', objectFit: 'cover' }}
        />
        <Stack spacing={1}>
          <Typography sx={{ fontSize: '20px', color: PRIMARY_MAIN, fontWeight: 500 }}>
            Nhạc của Vũ. được nhiều người dùng để cầu hôn.
          </Typography>
          <Typography sx={{ fontSize: '16px', color: GRAY_800, fontWeight: 500 }}>
            Nhạc của Vũ. được nhiều người dùng để cầu hôn. Và đây là cách "Hoàng Tử Indie" cầu hôn vợ của mình.
          </Typography>
          <Typography sx={{ fontSize: '14px', color: GRAY_500, fontWeight: 500 }}>15/1/2024</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default NewsCreatedByUser;
