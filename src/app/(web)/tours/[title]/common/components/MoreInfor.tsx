import Iconify from '@/common/components/iconify/Iconify';
import { Box, Typography, Stack } from '@mui/material';

const MoreInfor = () => {
  return (
    <Box sx={{ p: '20px', borderRadius: '5px', border: '1px solid #dce0e0', mt: '32px' }}>
      <Typography sx={{ fontSize: '18px', fontWeight: 600, color: '#000' }}>Liên hệ để biết thêm thông tin</Typography>
      <Box sx={{ pt: '20px', borderTop: '1px solid #dce0e0' }}>
        <Stack spacing={2} direction={'row'} alignItems={'center'}>
          <Iconify icon={'gridicons:phone'} sx={{ color: '#555', width: '20px', height: '20px' }} />
          <Typography variant="body1" sx={{ color: '#555' }}>
            0326.118.431
          </Typography>
        </Stack>
        <Stack spacing={2} direction={'row'} alignItems={'center'} mt="5px">
          <Iconify icon={'gala:clock'} sx={{ color: '#555', width: '20px', height: '20px' }} />
          <Typography variant="body1" sx={{ color: '#555' }}>
            Thứ 2 - Thứ 7, 8:00 - 18:00
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
};

export default MoreInfor;
