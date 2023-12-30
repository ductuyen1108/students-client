import { Box } from '@mui/material';

const Hero = () => {
  return (
    <Box>
      <video
        src="/videos/car-video.mp4"
        muted
        autoPlay
        loop
        typeof="video.mp4"
        style={{
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
          opacity: 0.8,
          objectFit: 'cover',
        }}
      />
    </Box>
  );
};

export default Hero;
