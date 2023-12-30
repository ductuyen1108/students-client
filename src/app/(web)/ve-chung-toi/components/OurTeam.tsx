import Container from '@/common/config/container';
import { DescPage, TitlePage } from '@/common/config/text';
import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import { users } from '../constant';

const OurTeam = () => {
  return (
    <Box sx={{ background: '#fff', py: '100px' }}>
      <Container sx={{ textAlign: 'center' }}>
        <TitlePage text="Thành viên team chúng tôi" color="#000" />
        <DescPage text="Đội ngũ sáng lập công ty DT Travel" color="#8D9199" />
        <Grid container columnSpacing={3} rowSpacing={3} mt="30px">
          {users.map((user) => (
            <Grid key={user.name} item md={2.4} sm={4} xs={6}>
              <Box>
                <Box
                  sx={{
                    background: `url(${user.src}) no-repeat center/cover`,
                    width: '100%',
                    height: { sm: '220px', xs: '120px' },
                    borderRadius: '50%',
                  }}
                ></Box>
                <Typography sx={{ fontWeight: 600, color: '#000', fontSize: '20px', mt: '20px', mb: '10px' }}>
                  {user.name}
                </Typography>
                <Typography sx={{ fontWeight: 400, color: '#8d9199', fontSize: '15px' }}>{user.position}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default OurTeam;
