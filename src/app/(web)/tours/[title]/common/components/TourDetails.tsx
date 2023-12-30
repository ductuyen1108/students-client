import parse from 'html-react-parser';
import { Box, Stack, Grid, Typography, SxProps, Rating } from '@mui/material';
import { TitlePage } from '@/common/config/text';
import Iconify from '@/common/components/iconify/Iconify';
import RatingReview from './RatingReview';
import { ITourDetail, ITourItem } from '@/app/(web)/Home/common/interface';
import { convertDate } from '@/common/utils/convertData';
import { reduceRating } from '@/common/utils/reduceRating';
import { useEffect, useState } from 'react';

const styledStack: SxProps = {
  justifyContent: 'center',
  alignItems: 'center',
};

const styledTypo: SxProps = {
  fontSize: '14px',
  fontWeight: 400,
  color: '#222222',
};

const styledIcon = { width: '40px', height: '40px', color: '#222' };

const styledBoxInforTour: SxProps = { py: '20px', borderTop: '1px solid #dce0e0' };

interface Props {
  details?: ITourItem;
  title?: string;
}

const TourDetails = ({ details, title }: Props) => {
  console.log('average rating', details?.averageRating);
  const [averageRating, setAverageRating] = useState<any>(details?.averageRating);
  useEffect(() => {
    return setAverageRating(details?.averageRating);
  }, [details?.averageRating]);
  return (
    <Stack spacing={3}>
      <Box>
        <TitlePage text={title || ''} color="#212B36" />
        <Grid
          container
          sx={{ mt: '20px', py: '25px', borderTop: '1px dashed #dce0e0', borderBottom: '1px dashed #dce0e0' }}
          rowSpacing={3}
        >
          <Grid item sm={3} xs={6}>
            <Stack spacing={1} sx={styledStack}>
              <Iconify icon={'fluent:clock-24-regular'} style={styledIcon} />
              <Typography sx={styledTypo}>5 ngày</Typography>
            </Stack>
          </Grid>
          <Grid item sm={3} xs={6}>
            <Stack spacing={1} sx={styledStack}>
              <Iconify icon={'uil:schedule'} style={styledIcon} />
              <Typography sx={styledTypo}>{convertDate({ data: details?.tourDetail?.startDate || '' })}</Typography>
            </Stack>
          </Grid>
          <Grid item sm={3} xs={6}>
            <Stack spacing={1} sx={styledStack}>
              <Iconify icon={'fa-regular:id-card'} style={styledIcon} />
              <Typography sx={styledTypo}>{details?.tourDetail?.ageLimit} +</Typography>
            </Stack>
          </Grid>
          <Grid item sm={3} xs={6}>
            <Stack spacing={1} sx={styledStack}>
              <Iconify icon={'ph:user-light'} style={styledIcon} />
              <Typography sx={styledTypo}>Khả dụng {details?.tourDetail?.peopleLimit}</Typography>
            </Stack>
          </Grid>
        </Grid>
      </Box>
      <Stack className="tour-content">{parse(details?.tourDetail?.content || '')}</Stack>
      <Stack mt="50px">
        <Box sx={styledBoxInforTour}>
          <Grid container rowSpacing={2}>
            <Grid item sm={4} xs={12} sx={{ fontSize: '16px' }}>
              Khởi hành từ:
            </Grid>
            <Grid item sm={8} xs={12} sx={{ fontWeight: 300 }}>
              Bến xe Gia Lâm, Hà Nội
            </Grid>
          </Grid>
        </Box>
        <Box sx={styledBoxInforTour}>
          <Grid container rowSpacing={2}>
            <Grid item sm={4} xs={12} sx={{ fontSize: '16px' }}>
              Ngày / Giờ khởi hành:
            </Grid>
            <Grid item sm={8} xs={12} sx={{ fontWeight: 300 }}>
              {convertDate({ data: details?.tourDetail?.startDate || '' })}
            </Grid>
          </Grid>
        </Box>
        <Box sx={styledBoxInforTour}>
          <Grid container rowSpacing={2}>
            <Grid item sm={4} xs={12} sx={{ fontSize: '16px' }}>
              Thời gian chuyến đi:
            </Grid>
            <Grid item sm={8} xs={12} sx={{ fontWeight: 300 }}>
              5 ngày
            </Grid>
          </Grid>
        </Box>
        <Box sx={styledBoxInforTour}>
          <Grid container rowSpacing={2}>
            <Grid item sm={4} xs={12} sx={{ fontSize: '16px' }}>
              Bản đồ địa điểm:
            </Grid>
            <Grid item sm={8} xs={12}>
              <iframe
                title="Google Map"
                width="100%"
                height="300px"
                frameBorder="0"
                style={{ border: '2px solid #dce0e0' }}
                src={details?.tourDetail?.map}
                allowFullScreen
              />
            </Grid>
          </Grid>
        </Box>
        <Stack>
          <Typography sx={{ fontSize: '18px', color: '#000', fontWeight: 600 }}>
            {details?.userReviews?.length} đánh giá
          </Typography>
          <Box sx={{ py: '30px', borderTop: '1px solid #dce0e0', borderBottom: '1px solid #dce0e0', mt: '10px' }}>
            <RatingReview
              accomodation={averageRating?.accommodation}
              destination={averageRating?.destination}
              meals={averageRating?.meals}
              transport={averageRating?.transport}
              valueOfMoney={averageRating?.valueForMoney}
              overall={averageRating?.overall}
            />
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default TourDetails;
