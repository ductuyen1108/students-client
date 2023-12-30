'use client';

import { Box, Grid } from '@mui/material';
import Hero from './components/Hero';
import NewsDetails from './components/NewsDetails';
import Container from '@/common/config/container';
import ListNewsByTopic from './components/ListNewsByTopics';
import ConnectUs from './components/ConnectUs';
import { useGetNewsDetails } from '../common/hooks/useGetNewsDetails';
import Navbar from '@/common/components/navbar';
import Footer from '@/common/components/footer';

const Page = ({ params }: { params: { title: string } }) => {
  const { newsDetailsData } = useGetNewsDetails(params.title);
  return (
    <section>
      <Navbar />
      <Hero hero={newsDetailsData} />
      <Container sx={{ my: '50px' }}>
        <Grid container columnSpacing={5} rowSpacing={3}>
          <Grid item md={8}>
            <NewsDetails content={newsDetailsData?.newsDetails[0]?.content || ''} />
          </Grid>
          <Grid item md={4}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <ListNewsByTopic id={newsDetailsData?.id} />
              <ConnectUs />
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </section>
  );
};

export default Page;
