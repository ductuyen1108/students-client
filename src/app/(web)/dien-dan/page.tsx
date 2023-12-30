import Footer from '@/common/components/footer';
import Navbar from '@/common/components/navbar';
import Hero from './components/Hero';
import { Stack } from '@mui/material';
import ListPost from './components/ListPost';
import Container from '@/common/config/container';
import FormCreatePost from './components/FormCreatePost';

const SocialMedia = () => {
  return (
    <section>
      <Navbar />
      <Hero />
      <Container>
        <Stack direction={{ sm: 'row', xs: 'column' }} justifyContent={'space-between'} width={'100%'} py={'50px'}>
          <ListPost />
          <FormCreatePost />
        </Stack>
      </Container>
      <Footer />
    </section>
  );
};

export default SocialMedia;
