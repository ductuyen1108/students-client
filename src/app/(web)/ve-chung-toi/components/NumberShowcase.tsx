import Container from '@/common/config/container';
import { DescPage, TitlePage } from '@/common/config/text';
import { Box, Grid } from '@mui/material';

const NumberShowcase = () => {
  return (
    <Box sx={{ background: '#000', py: '50px' }}>
      <Grid container justifyContent={'center'} width={'100%'}>
        <Grid item md={6} sm={6} xs={12} textAlign="center">
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <TitlePage
              text="Những thành công của chúng tôi không chỉ là số liệu và con số, mà còn là những câu chuyện đằng sau mỗi chuyến đi."
              color="#fff"
            />
            <DescPage
              text="Từ việc đưa khách hàng đến những ngôi làng bản địa tận cùng của Việt Nam đến việc tổ chức những sự kiện độc đáo, chúng tôi tự hào về những khoảnh khắc không thể nào quên và những kí ức vô giá mà chúng tôi đã tạo ra cùng với khách hàng."
              color="#fff"
            />
          </Box>
        </Grid>
        <Grid item md={12} sm={12} xs={12} container>
          <Grid item md={6}>
            <Box></Box>
          </Grid>
          <Grid item md={6}></Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default NumberShowcase;
