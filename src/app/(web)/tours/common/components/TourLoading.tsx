import { Grid, Skeleton, Stack } from '@mui/material';

const TourLoading = () => {
  return (
    <Grid container columnSpacing={4} rowSpacing={4}>
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <Grid key={item} item sm={4} xs={12}>
          <Stack sx={{ borderRadius: '5px', border: '1px solid #dce0e0' }}>
            <Skeleton variant="rectangular" width={'100%'} height={'280px'} />
            <Stack padding={2} spacing={2}>
              <Skeleton variant="text" sx={{ fontSize: '18px', width: '100%' }} />
              <Skeleton variant="text" sx={{ fontSize: '12px', width: '100px' }} />
              <Stack direction={'row'} justifyContent={'space-between'}>
                <Skeleton variant="text" sx={{ fontSize: '16px', width: '150px' }} />
                <Skeleton variant="text" sx={{ fontSize: '16px', width: '50px' }} />
              </Stack>
            </Stack>
          </Stack>
        </Grid>
      ))}
    </Grid>
  );
};

export default TourLoading;
