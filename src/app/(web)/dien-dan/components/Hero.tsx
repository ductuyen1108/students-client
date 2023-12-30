import Container from '@/common/config/container';
import { DescPage, TitlePage } from '@/common/config/text';
import { Box } from '@mui/material';

const Hero = () => {
  return (
    <Box
      sx={{
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), url(/images/dien-dan/social-media.jpg) no-repeat center/cover, lightgray 50%`,
        height: '550px',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container>
        <Box sx={{ textAlign: 'center' }}>
          <TitlePage text="Diễn đàn blog DT Travel" color="#fff" />
          <DescPage
            text="Nơi bạn có thể chia sẻ những blog hay của mình về chủ đề du lịch với mọi người và cùng theo dõi những bài viết hay từ cộng đồng."
            color="#fff"
          />
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
