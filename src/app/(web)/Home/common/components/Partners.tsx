import { Box, SxProps } from '@mui/material';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import Img1 from '@/../public/images/partners/logo-cadivi.jpg';
import Img2 from '@/../public/images/partners/logo-jetstar.jpg';
import Img3 from '@/../public/images/partners/logo-prudential.jpg';
import Img4 from '@/../public/images/partners/logo-samsung.png';
import Img5 from '@/../public/images/partners/logo-sharp.jpg';
import Img6 from '@/../public/images/partners/logo-vietnam-airlines.png';

const styledBoxImage: SxProps = {
  width: '150px',
  mx: { md: '32px', sm: '25px', xs: '18px' },
};

const images = [
  { id: 1, src: Img1 },
  { id: 2, src: Img2 },
  { id: 3, src: Img3 },
  { id: 4, src: Img4 },
  { id: 5, src: Img5 },
  { id: 6, src: Img6 },
];

const Partners = () => {
  return (
    <Box sx={{ py: '25px' }}>
      <Marquee autoFill direction="left" speed={100} gradient>
        {images.map((img) => (
          <Box key={img.id} sx={styledBoxImage}>
            <Image src={img.src} alt={`dt-travel-partners-${img.id}`} style={{ width: '100%', height: 'auto' }} />
          </Box>
        ))}
      </Marquee>
    </Box>
  );
};

export default Partners;
