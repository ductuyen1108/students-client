import Container from '@/common/config/container';
import { TitlePage } from '@/common/config/text';
import { GRAY_800, PRIMARY_LIGHT } from '@/common/constants/colors';
import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import Image from 'next/image';

const Hero = () => {
  return (
    <Box sx={{ py: '100px', background: 'linear-gradient(135deg, #FFFEFF 10%, #D7FFFE 100%);' }}>
      <Container>
        <Grid container columnSpacing={4} alignItems={'center'}>
          <Grid item sm={7}>
            <Stack spacing={2}>
              <TitlePage text="Chào mừng bạn đến với trang web của" color={GRAY_800} />
              <TitlePage text="Giáo xứ Cẩm Giang" color={PRIMARY_LIGHT} />
              <Button
                variant="contained"
                sx={{ width: 'fit-content', p: '10px 50px', fontSize: '16px', fontWeight: 600, borderRadius: '24px' }}
              >
                Get started
              </Button>
            </Stack>
          </Grid>
          <Grid item sm={5}>
            <Image
              src={'/images/hero.webp'}
              alt=""
              width={950}
              height={800}
              style={{ width: '100%', height: 'auto', filter: 'drop-shadow(#007ADF 5px 5px 8px)' }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
