import Container from '@/common/config/container';
import { DescPage } from '@/common/config/text';
import { PRIMARY_MAIN } from '@/common/constants/colors';
import { Box } from '@mui/material';
import CarDatas from '../common/components/CarDatas';

const ListCars = () => {
  return (
    <Box sx={{ my: '50px' }}>
      <Container>
        <DescPage
          text="Để có thể lựa chọn cho mình dịch vụ thuê xe giá rẻ, thuê xe 20 chỗ; thuê xe 24 chỗ; thuê xe 29 chỗ; thuê xe 35 chỗ; thuê xe 39 chỗ; thuê xe 45 chỗ; xe du lịch 35 chỗ giá rẻ và hợp lý nhất, quý khách có thể tham khảo thêm thông tin các loại xe du lịch, thuê xe dịch vụ cùng bảng giá thuê xe ngay tại Website và đặt thuê xe tuyến để nhận được nhiều ưu đãi hấp dẫn. Tham khảo Bảng giá thuê xe du lịch mà DT Travel đang cung cấp:"
          color="#333333"
        />
        <Box sx={{ width: '100%', height: '0.55px', backgroundColor: PRIMARY_MAIN, my: '30px' }}></Box>
        <CarDatas />
      </Container>
    </Box>
  );
};

export default ListCars;
