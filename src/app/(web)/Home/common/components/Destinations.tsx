import Container from '@/common/config/container';
import { DescPage, TitlePage } from '@/common/config/text';
import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { imagesCardDestination } from '../../constant';
import Image from 'next/image';
import Link from 'next/link';

const Destination = () => {
  return (
    <Box mb="100px" mt="50px">
      <Container>
        <Box sx={{ textAlign: 'center' }}>
          <TitlePage text="Điểm đến phổ biến" color="#000000" />
          <DescPage text="Những địa điểm du lịch tuyệt vời nhất Việt Nam" color="#8D9199" />
        </Box>
        <Grid container columnSpacing={3} rowSpacing={3} mt="50px">
          {imagesCardDestination.map((img) => (
            <Grid key={img.src} item md={3} sm={6} xs={6}>
              <Card component={Link} href={'/'}>
                <CardActionArea>
                  <Box
                    sx={{
                      position: 'relative',
                      width: '100%',
                      height: { sm: '300px', xs: '180px' },
                      background: `linear-gradient(0deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.20) 100%), url(${img.src}) no-repeat center/cover, lightgray 50%`,
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: '24px',
                        fontWeight: 800,
                        color: '#fff',
                        position: 'absolute',
                        left: '15px',
                        bottom: '15px',
                      }}
                    >
                      {img.text}
                    </Typography>
                  </Box>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Destination;
