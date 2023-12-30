import Container from '@/common/config/container';
import { DescPage, TitlePage } from '@/common/config/text';
import { Box, Typography } from '@mui/material';

const Hero = () => {
  return (
    <Box
      sx={{
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), url(/images/ve-chung-toi/hero.png) no-repeat center/cover, lightgray 50%`,
        height: '550px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Container sx={{ textAlign: 'center' }}>
        <TitlePage
          text="Chúng tôi là DT Travel - nơi cung cấp các dịch vụ du lịch hàng đầu Việt Nam hiện nay"
          color="#fff"
        />
        <DescPage text="Những chuyến đi, trải nghiệm và địa điểm. Tất cả trong một dịch vụ" color="#fff" />
      </Container>
    </Box>
  );
};

export default Hero;
