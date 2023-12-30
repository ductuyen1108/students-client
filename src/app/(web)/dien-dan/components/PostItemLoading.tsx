import { Skeleton, Stack } from '@mui/material';

const PostItemLoading = () => {
  return (
    <>
      {[1, 2, 3, 4, 5].map((item) => (
        <Stack
          key={item}
          direction={{ sm: 'row', xs: 'column' }}
          spacing={3}
          alignItems={'center'}
          sx={{ border: '1px solid rgba(145, 158, 171, 0.24)', borderRadius: '15px', padding: 2 }}
        >
          <Skeleton variant="rectangular" width={130} height={100} />
          <Stack spacing={1} width={'100%'}>
            <Skeleton variant="text" sx={{ fontSize: '16px', width: '100%' }} />
            <Skeleton variant="text" sx={{ fontSize: '16px', width: '100%' }} />
            <Skeleton variant="text" sx={{ fontSize: '12px', width: '250px' }} />
          </Stack>
        </Stack>
      ))}
    </>
  );
};

export default PostItemLoading;
