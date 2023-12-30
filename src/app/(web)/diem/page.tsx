import { Stack } from '@mui/material';
import ScoreStudentTable from './components/class-table/ScoreStudentTable';
import Container from '@/common/config/container';
import Navbar from '@/common/components/navbar';
import Footer from '@/common/components/footer';
import { TitlePage } from '@/common/config/text';
import { GRAY_800 } from '@/common/constants/colors';

const Score = () => {
  return (
    <section>
      <Navbar />
      <Container sx={{ py: '100px' }}>
        <Stack spacing={3} textAlign={'center'} width={'100%'}>
          <TitlePage text="Bảng thống kê điểm giữa kỳ và cuối kỳ của đoàn sinh" color={GRAY_800} />
          <ScoreStudentTable />
        </Stack>
      </Container>
    </section>
  );
};

export default Score;
