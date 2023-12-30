import { GRADIENT_COLOR } from '@/common/constants/colors';
import { Box, Typography, InputBase, Button } from '@mui/material';

const SubcribeForm = () => {
  return (
    <Box sx={{ background: '#f5f5f5', border: '1px solid #dce0e0', borderRadius: '5px', padding: '24px' }}>
      <Typography sx={{ fontSize: '18px', fontWeight: 700 }}>Bảng tin</Typography>
      <Box component="form" sx={{ pt: '15px', borderTop: '1px solid #dce0e0', mt: '5px' }}>
        <Typography sx={{ fontSize: '15px', fontWeight: 300, color: '#555555' }}>
          Đừng bỏ lỡ một điều! Đăng ký để nhận ưu đãi hàng ngày
        </Typography>
        <InputBase
          fullWidth
          type="email"
          placeholder="Nhập email của bạn"
          sx={{
            background: '#fff',
            borderRadius: '5px',
            border: '1px solid #dce0e0',
            my: '15px',
            py: '5px',
            pl: '20px',
          }}
        />
        <Button variant="contained" fullWidth sx={{ backgroundImage: GRADIENT_COLOR, py: '10px' }}>
          Đăng ký
        </Button>
      </Box>
    </Box>
  );
};

export default SubcribeForm;
