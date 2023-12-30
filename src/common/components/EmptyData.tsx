import { Box, Stack, Typography } from '@mui/material';
import { DescPage } from '../config/text';
import { GRAY_600 } from '../constants/colors';

const EmptyData = () => {
  return (
    <Stack spacing={2} alignItems={'center'} justifyContent={'center'}>
      <Box
        component={'img'}
        width={'100%'}
        height={'auto'}
        alt=""
        src="/images/empty-data.png"
        sx={{ objectFit: 'cover' }}
      />
      <DescPage text="Dữ liệu trống" color={GRAY_600} />
    </Stack>
  );
};

export default EmptyData;
