'use client';

import Container from '@/common/config/container';
import { Grid } from '@mui/material';
import NewsItem from '../common/components/NewsItem';
import { useGetLatestNews } from '../common/hooks/useGetLatestNews';

const ListNews = () => {
  const { listLatestNews } = useGetLatestNews({});
  return (
    <Container
      sx={{
        mt: '50px',
        mb: '50px',
        display: 'flex',
        flexDirection: 'column',
        gap: '30px',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Grid container columnSpacing={4} rowSpacing={4}>
        {listLatestNews?.map((it) => (
          <Grid key={it.id} item md={4}>
            <NewsItem detail={it} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ListNews;
