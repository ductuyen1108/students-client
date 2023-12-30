import CarDetails from './components/CarDetails';
import Container from '@/common/config/container';
import { Box } from '@mui/material';
import { TitlePage } from '@/common/config/text';
import { GRAY_700 } from '@/common/constants/colors';

const Page = ({ params }: { params: { name: string } }) => {
  return (
    <section>
      <Box sx={{ my: '100px' }}>
        <Container>
          <TitlePage text={`Giá Thuê Xe ${params.name} Đề Xuất Từ DT Travel`} color={GRAY_700} />
          <CarDetails name={params.name} />
        </Container>
      </Box>
    </section>
  );
};

export default Page;
