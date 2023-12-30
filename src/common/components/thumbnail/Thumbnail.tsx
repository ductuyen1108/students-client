import { Box } from '@mui/material';

export const ThumbnailCard = ({ src }: { src: string }) => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        aspectRatio: '7/4',
        objectFit: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(${src})`,
        backgroundAttachment: 'local',
        cursor: 'pointer',
      }}
    ></Box>
  );
};
