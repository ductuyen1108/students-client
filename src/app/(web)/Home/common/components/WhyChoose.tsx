import Container from '@/common/config/container';
import { DescPage, TitlePage } from '@/common/config/text';
import { Box, Grid, Typography } from '@mui/material';
import { imagesWhyChoose } from '../../constant';
import Image from 'next/image';

const WhyChoose = () => {
  return (
    <Box sx={{ my: '100px' }}>
      <Container>
        <Box sx={{ textAlign: 'center' }}>
          <TitlePage text="Tại sao chọn chúng tôi?" color="#000000" />
          <DescPage text="Dưới đây là những lý do bạn nên lên kế hoạch cho chuyến đi cùng chúng tôi" color="#8D9199" />
        </Box>
        <Grid container columnSpacing={5} rowSpacing={3} mt="30px">
          {imagesWhyChoose.map((img) => (
            <Grid key={img.src} item md={4}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '18px',
                  textAlign: 'center',
                }}
              >
                <Image src={img.src} alt={img.alt} width={150} height={150} />
                <Typography sx={{ fontSize: '20px', fontWeight: 700, color: '#000000' }}>{img.title}</Typography>
                <DescPage text={img.desc} color="#222222" />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Box
        my="100px"
        sx={{
          backgroundImage: 'url(/images/home/why-choose/ha-long-bay.jpg)',
          width: '100%',
          height: { md: '450px', sm: '400px', xs: '300px' },
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      ></Box>
    </Box>
  );
};

export default WhyChoose;
