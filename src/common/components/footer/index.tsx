import Container from '@/common/config/container';
import { Box, Grid, InputBase, Typography, IconButton } from '@mui/material';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import { GRADIENT_COLOR, GRAY_100, GRAY_700 } from '@/common/constants/colors';
import { DescPage } from '@/common/config/text';
import { linkFooter } from './common/constant';
import Image from 'next/image';

const Footer = () => {
  return (
    <Box sx={{ py: '100px', backgroundColor: GRAY_100 }}>
      <Container>
        <Grid container columnSpacing="100px" rowSpacing={5}>
          <Grid item md={3}>
            <Box>
              <Typography
                sx={{
                  fontSize: '30px',
                  fontWeight: 700,
                  backgroundImage: GRADIENT_COLOR,
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  display: 'flex',
                  alignItems: 'center',
                  mb: '10px',
                }}
              >
                DT-Travel
              </Typography>
              <Box sx={{ mt: '15px' }}>
                <Typography sx={{ fontSize: '16px', fontWeight: 600, color: '#333333' }}>
                  Khám phá và đặt hành trình của bạn ngay hôm nay với ứng dụng của chúng tôi!
                </Typography>
                <Typography sx={{ fontSize: '12px', fontWeight: 400, mt: '10px' }}>
                  Copyright © 2023 DucTuyen
                </Typography>
              </Box>
            </Box>
          </Grid>
          {linkFooter.map((item) => (
            <Grid key={item.title} item md={2.5} mt="5px">
              <Typography sx={{ fontSize: '18px', fontWeight: 700, color: GRAY_700, mb: '24px' }}>
                {item.title}
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {item.subLinks.map((it) => (
                  <Typography key={it.id} sx={{ fontSize: '16px', fontWeight: 400, color: GRAY_700 }}>
                    {it.text}
                  </Typography>
                ))}
              </Box>
            </Grid>
          ))}
          <Grid item md={4} mt="5px">
            <Typography sx={{ fontSize: '18px', fontWeight: 700, color: GRAY_700, mb: '24px' }}>
              Đăng ký nhận thông tin khuyến mãi
            </Typography>
            <Typography sx={{ fontSize: '16px', fontWeight: 400, color: GRAY_700 }}>
              Nhập email để có cơ hội giảm 50% cho chuyến đi tiếp theo của Quý khách
            </Typography>
            <InputBase
              sx={{
                border: '1.55px solid #454F5B',
                borderRadius: '24px',
                padding: '3px 7px 3px 20px',
                width: '100%',
                mt: '20px',
              }}
              endAdornment={
                <IconButton>
                  <SendOutlinedIcon color="primary" />
                </IconButton>
              }
              placeholder="Email của bạn"
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
