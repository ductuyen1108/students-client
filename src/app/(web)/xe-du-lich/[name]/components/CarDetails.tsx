import { DescPage, TitlePage } from '@/common/config/text';
import { GRADIENT_COLOR, GRAY_500, GRAY_700, PRIMARY_MAIN } from '@/common/constants/colors';
import { Typography, Box, Grid, Button } from '@mui/material';
import Image from 'next/image';
import GarageIcon from '@mui/icons-material/Garage';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import GroupIcon from '@mui/icons-material/Group';
import PaletteIcon from '@mui/icons-material/Palette';
import PhoneIcon from '@mui/icons-material/Phone';
import PriceChangeIcon from '@mui/icons-material/PriceChange';

const CarDetails = ({ name }: { name: string }) => {
  return (
    <Grid container mt={3} columnSpacing={3}>
      <Grid item md={7}>
        <Image
          src="/images/cars/mercedes.jpg"
          alt={`dt-travel-xe-du-lich-${name}`}
          width={1195}
          height={689}
          style={{ width: '100%', height: 'auto' }}
        />
      </Grid>
      <Grid item md={5}>
        <DescPage
          text={`Dịch vụ thuê xe du lịch, thuê xe ${name}, thuê xe dịch vụ của công ty DT Travel đang được nhiều khách hàng lựa chọn tin dùng. Dàn xe đời mới hiện đại tại DT Travel đảm bảo luôn mang lại sự hài lòng cho quý khách hàng thuê xe.`}
          color="#333333"
        />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            mt: '20px',
            padding: '30px 20px',
            backgroundColor: '#f3f3f3',
            borderRadius: '8px',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', fontSize: '14px', color: GRAY_500, gap: '15px' }}>
            <Typography sx={{ display: 'flex', alignItems: 'center', fontSize: '14px', color: GRAY_500, gap: '8px' }}>
              <GarageIcon sx={{ color: '#333' }} /> Hãng xe:
            </Typography>
            <Typography sx={{ fontSize: '14px', color: GRAY_500 }}>Mercedes</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', fontSize: '14px', color: GRAY_500, gap: '15px' }}>
            <Typography sx={{ display: 'flex', alignItems: 'center', fontSize: '14px', color: GRAY_500, gap: '8px' }}>
              <DirectionsCarIcon sx={{ color: '#333' }} /> Kiểu xe:
            </Typography>
            <Typography sx={{ fontSize: '14px', color: GRAY_500 }}>4 chỗ</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', fontSize: '14px', color: GRAY_500, gap: '15px' }}>
            <Typography sx={{ display: 'flex', alignItems: 'center', fontSize: '14px', color: GRAY_500, gap: '8px' }}>
              <GroupIcon sx={{ color: '#333' }} /> Số chỗ:
            </Typography>
            <Typography sx={{ fontSize: '14px', color: GRAY_500 }}>4</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', fontSize: '14px', color: GRAY_500, gap: '15px' }}>
            <Typography sx={{ display: 'flex', alignItems: 'center', fontSize: '14px', color: GRAY_500, gap: '8px' }}>
              <PaletteIcon sx={{ color: '#333' }} /> Màu xe:
            </Typography>
            <Typography sx={{ fontSize: '14px', color: GRAY_500 }}>Nâu, Xanh, Trắng, Đen</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', fontSize: '14px', color: GRAY_500, gap: '15px' }}>
            <Typography sx={{ display: 'flex', alignItems: 'center', fontSize: '14px', color: GRAY_500, gap: '8px' }}>
              <PriceChangeIcon sx={{ color: '#333' }} /> Giá thuê:
            </Typography>
            <Typography sx={{ fontSize: '14px', color: GRAY_500 }}>2.500.000 đ / ngày</Typography>
          </Box>
          <Button
            variant="contained"
            sx={{ backgroundImage: GRADIENT_COLOR, color: '#fff', fontSize: '16px', mt: '15px' }}
          >
            Liên hệ
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default CarDetails;
