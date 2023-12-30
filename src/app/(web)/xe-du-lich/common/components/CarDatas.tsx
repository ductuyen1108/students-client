'use client';

import { useRouter } from 'next/navigation';
import { GRAY_600, PRIMARY_MAIN } from '@/common/constants/colors';
import { Box, Grid, Paper, Typography, Button } from '@mui/material';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import PeopleIcon from '@mui/icons-material/People';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import Image from 'next/image';
import Link from 'next/link';

const CarDatas = () => {
  const { push } = useRouter();
  return (
    <Box>
      <Grid container columnSpacing={3} rowSpacing={3}>
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <Grid key={item} item md={4} sm={6} xs={12}>
            <Paper sx={{ ':hover': { boxShadow: '0px 1.5px 15px 0px rgba(61, 155, 224, 0.20)' } }}>
              <Link href="/xe-du-lich/mercedes">
                <Image
                  src="/images/cars/xe.jpg"
                  alt=""
                  width={1536}
                  height={1021}
                  style={{ width: '100%', height: 'auto', borderRadius: '4px 4px 0px 0px' }}
                />
              </Link>
              <Box sx={{ padding: '10px 20px' }}>
                <Typography
                  sx={{
                    color: '#333',
                    fontSize: '20px',
                    fontWeight: 600,
                    display: '-webkit-box',
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    WebkitLineClamp: 1,
                    ':hover': {
                      color: PRIMARY_MAIN,
                      cursor: 'pointer',
                    },
                  }}
                  onClick={() => push('/xe-du-lich/mercedes')}
                >
                  Dịch vụ thuê xe Mercedes S500 VIP tại TPHCM và Hà Nội
                </Typography>
                <Box
                  sx={{ width: '100px', height: '0.55px', backgroundColor: PRIMARY_MAIN, mx: 'auto', my: '10px' }}
                ></Box>
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                  <Typography
                    sx={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '14px', color: GRAY_600 }}
                  >
                    <DirectionsCarIcon /> Mercedes
                  </Typography>
                  <Typography
                    sx={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '14px', color: GRAY_600 }}
                  >
                    <PeopleIcon /> 4 chỗ
                  </Typography>
                  <Button
                    variant="text"
                    startIcon={<ControlPointIcon sx={{ color: GRAY_600 }} />}
                    sx={{ color: GRAY_600 }}
                    onClick={() => push('/xe-du-lich/mercedes')}
                  >
                    Chi tiết
                  </Button>
                </Box>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CarDatas;
