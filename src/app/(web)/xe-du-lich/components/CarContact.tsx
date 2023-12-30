import Container from '@/common/config/container';
import { DescPage, TitlePage } from '@/common/config/text';
import { GRADIENT_COLOR, GRAY_600, GRAY_700, PRIMARY_MAIN } from '@/common/constants/colors';
import { Box, Paper, Typography, Grid, InputBase, Button } from '@mui/material';
import TextFieldInput from '../../../../common/components/form-field/TextFieldInput';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import SelectInput from '@/common/components/form-field/SelectInput';
import Image from 'next/image';

const CarContact = () => {
  return (
    <Box my="50px">
      <Container>
        <Box sx={{ mb: '40px' }}>
          <TitlePage text="Xe du lịch" color={GRAY_700} />
          <DescPage
            text="Xe du lịch – Phòng vận chuyển công ty DT Travel cung cấp và mang đến cho quý khách dịch vụ cho thuê xe  du lịch, thuê xe dịch vụ với giá cực tốt. Chúng tôi cho thuê  xe đời mới, thuê xe hoa, thuê xe Land Cruiser, thuê xe Audi A4, thuê xe Audi A6, cho thuê xe Audi R8, thuê xe A8, thuê xe Q5, thuê xe Q7. Hay dịch vụ thuê xe đám cưới, thuê xe Sienna, thuê xe Sedona, thuê xe Limousine, thuê xe Universe, thuê xe Limousine dcar,  E200,  E250, S400, S450, S500  từ 4 đến 47 chỗ của tất cả các hãng."
            color="#333"
          />
        </Box>
        <Paper component="form" sx={{ padding: '30px', borderRadius: '15px' }} elevation={3}>
          <Typography
            sx={{
              fontSize: { md: '32px', sm: '32px', xs: '24px' },
              color: PRIMARY_MAIN,
              fontWeight: 700,
              textAlign: 'center',
              mb: '30px',
            }}
          >
            THUÊ XE TRỰC TUYẾN
          </Typography>
          <Grid container columnSpacing={{ md: 10, sm: 3 }} rowSpacing="20px">
            <Grid item md={6} sm={12} xs={12}>
              <TextFieldInput text="Nhập ngày đi:" type="date" />
            </Grid>
            <Grid item md={6} sm={12} xs={12}>
              <TextFieldInput text="Nhập ngày về:" type="date" />
            </Grid>
            <Grid item md={6} sm={12} xs={12}>
              <TextFieldInput
                text="Nhập điểm đi:"
                type="text"
                placeholder="Nhập địa điểm"
                endAdornment={<FmdGoodIcon sx={{ color: GRAY_600 }} />}
              />
            </Grid>
            <Grid item md={6} sm={12} xs={12}>
              <TextFieldInput
                text="Nhập điểm đến:"
                type="text"
                placeholder="Nhập địa điểm"
                endAdornment={<FmdGoodIcon sx={{ color: GRAY_600 }} />}
              />
            </Grid>
            <Grid item md={6} sm={12} xs={12}>
              <TextFieldInput
                text="Họ và tên:"
                type="text"
                placeholder="Nhập tên"
                endAdornment={<PersonIcon sx={{ color: GRAY_600 }} />}
              />
            </Grid>
            <Grid item md={6} sm={12} xs={12}>
              <TextFieldInput
                text="Email:"
                type="text"
                placeholder="Nhập email"
                endAdornment={<MailIcon sx={{ color: GRAY_600 }} />}
              />
            </Grid>
            <Grid item md={6} sm={12} xs={12}>
              <TextFieldInput
                text="Điện thoại:"
                type="text"
                placeholder="Nhập số điện thoại"
                endAdornment={<PhoneIphoneIcon sx={{ color: GRAY_600 }} />}
              />
            </Grid>
            <Grid item md={6} sm={12} xs={12}>
              <SelectInput />
            </Grid>
            <Grid item md={12} sm={12} xs={12}>
              <DescPage text="Thêm thông tin và Yêu cầu khác:" color="#333333" />
              <InputBase
                type="text"
                placeholder="Nội dung"
                minRows={3}
                maxRows={3}
                multiline
                sx={{
                  mt: '10px',
                  padding: '10px 20px 10px 25px',
                  width: '100%',
                  backgroundColor: '#ecf0f1',
                  borderRadius: '10px',
                }}
              />
            </Grid>
          </Grid>
          <Button
            sx={{
              mt: '20px',
              padding: '10px 50px',
              backgroundImage: GRADIENT_COLOR,
              width: 'fit-content',
              borderRadius: '24px',
              color: '#fff',
              fontSize: '16px',
            }}
          >
            Thuê xe nhanh
          </Button>
        </Paper>
        <Image
          src="/images/cars/xe-du-lich.png"
          alt="dt-travel-cars"
          width={455}
          height={400}
          style={{ width: '100%', height: 'auto', marginTop: '50px' }}
        />
      </Container>
    </Box>
  );
};

export default CarContact;
