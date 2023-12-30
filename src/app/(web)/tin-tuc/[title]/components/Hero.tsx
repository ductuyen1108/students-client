import Container from '@/common/config/container';
import { TitlePage } from '@/common/config/text';
import { Box, Typography } from '@mui/material';
import { INewsItem } from '../../common/interface';
import { convertDate } from '@/common/utils/convertData';

interface Props {
  hero?: INewsItem;
}

const Hero = ({ hero }: Props) => {
  return (
    <Box
      sx={{
        height: '550px',
        display: 'flex',
        pb: '70px',
        alignItems: 'flex-end',
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), url(${hero?.thumbnail?.url}) no-repeat center/cover, lightgray 50%`,
      }}
    >
      <Container>
        <TitlePage text={hero?.title || ''} color="#fff" />
        <Typography sx={{ fontSize: '12px', fontWeight: 600, color: '#fff', textTransform: 'uppercase' }}>
          {convertDate({ data: hero?.createdAt || '' })}
        </Typography>
      </Container>
    </Box>
  );
};

export default Hero;
