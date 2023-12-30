import Container from '@/common/config/container';
import { DescPage, TitlePage } from '@/common/config/text';
import { Box } from '@mui/material';

const Hero = () => {
  return (
    <Box
      sx={{
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), url(/images/tours/hero.jpg) no-repeat center/cover, lightgray 50%`,
        height: '400px',
        maxWidth: '100%',
        objectFit: 'cover',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container>
        <Box sx={{ textAlign: 'center' }}>
          <TitlePage text="Các tour du lịch đặc sắc của chúng tôi" color="#fff" />
          <DescPage
            text="Chúng tôi biến mỗi chuyến đi thành một phiêu lưu không ngừng, đắm chìm trong vẻ đẹp và sự phong phú của Việt Nam"
            color="#fff"
          />
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
