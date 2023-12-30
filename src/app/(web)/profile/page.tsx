'use client';

import { Stack } from '@mui/material';
import UserInforHeader from './components/UserInforHeader';
import SideBar from './components/Sidebar';
import Container from '@/common/config/container';
import Content from './components/Content';
import Navbar from '@/common/components/navbar';
import Footer from '@/common/components/footer';
import { useGetProfile } from './common/hooks/useGetProfile';

const Profile = () => {
  const { profileData, isLoadingData } = useGetProfile();
  return (
    <section>
      <Navbar />
      <Stack>
        <UserInforHeader profileInfo={profileData} />
        <Container sx={{ mt: '150px', mb: '50px' }}>
          <Stack width={'100%'} direction={{ sm: 'row', xs: 'column' }} spacing={2}>
            <SideBar />
            <Content />
          </Stack>
        </Container>
      </Stack>
    </section>
  );
};

export default Profile;
