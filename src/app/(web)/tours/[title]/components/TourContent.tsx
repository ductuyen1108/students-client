import Container from '@/common/config/container';
import { Grid, Box } from '@mui/material';
import TourDetails from '../common/components/TourDetails';
import TourReviews from '../common/components/TourReviews';
import FormTourReview from '../common/components/FormTourReview';
import SimilarTours from '../common/components/SimilarTours';
import TourSubmitForm from '../common/components/TourSubmitForm';
import MoreInfor from '../common/components/MoreInfor';
import { ITourItem } from '@/app/(web)/Home/common/interface';

interface Props {
  details?: ITourItem;
}

const TourContent = ({ details }: Props) => {
  return (
    <Box my="50px">
      <Container>
        <Grid container columnSpacing={5} rowSpacing={5}>
          <Grid item sm={8} xs={12}>
            <TourDetails details={details} title={details?.title} />
            <TourReviews userReviews={details?.userReviews || []} />
            <FormTourReview tourId={details?.id} />
          </Grid>
          <Grid item sm={4} xs={12} sx={{ position: { md: 'sticky', sm: 'sticky', xs: 'static' }, top: 0 }}>
            <TourSubmitForm price={details?.tourDetail?.price || 0} tourId={details?.id || 0} />
            <MoreInfor />
          </Grid>
        </Grid>
      </Container>
      <SimilarTours id={details?.id} />
    </Box>
  );
};

export default TourContent;
