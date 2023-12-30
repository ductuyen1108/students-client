import { Grid, Rating, Typography, Box } from '@mui/material';

interface RatingProps {
  accomodation?: number;
  destination?: number;
  meals?: number;
  transport?: number;
  valueOfMoney?: number;
  overall?: number;
}

const RatingReview = ({ accomodation, destination, meals, transport, valueOfMoney, overall }: RatingProps) => {
  return (
    <Grid container rowSpacing={3}>
      <Grid item container md={6}>
        <Grid item sm={6} xs={6}>
          <Typography sx={{ fontSize: '14px', color: '#222', fontWeight: '500' }}>Chỗ ở</Typography>
        </Grid>
        <Grid item sm={6} xs={6}>
          <Rating readOnly defaultValue={accomodation} precision={0.5} size="small" sx={{ color: '#2ea2cc' }} />
        </Grid>
      </Grid>
      <Grid item container md={6}>
        <Grid item sm={6} xs={6}>
          <Typography sx={{ fontSize: '14px', color: '#222', fontWeight: '500' }}>Điểm đến</Typography>
        </Grid>
        <Grid item sm={6} xs={6}>
          <Rating readOnly defaultValue={destination} precision={0.5} size="small" sx={{ color: '#2ea2cc' }} />
        </Grid>
      </Grid>
      <Grid item container md={6}>
        <Grid item sm={6} xs={6}>
          <Typography sx={{ fontSize: '14px', color: '#222', fontWeight: '500' }}>Bữa ăn phục vụ</Typography>
        </Grid>
        <Grid item sm={6} xs={6}>
          <Rating readOnly defaultValue={meals} precision={0.5} size="small" sx={{ color: '#2ea2cc' }} />
        </Grid>
      </Grid>
      <Grid item container md={6}>
        <Grid item sm={6} xs={6}>
          <Typography sx={{ fontSize: '14px', color: '#222', fontWeight: '500' }}>Phương tiện di chuyển</Typography>
        </Grid>
        <Grid item sm={6} xs={6}>
          <Rating readOnly defaultValue={transport} precision={0.5} size="small" sx={{ color: '#2ea2cc' }} />
        </Grid>
      </Grid>
      <Grid item container md={6}>
        <Grid item sm={6} xs={6}>
          <Typography sx={{ fontSize: '14px', color: '#222', fontWeight: '500' }}>Giá trị tour</Typography>
        </Grid>
        <Grid item sm={6} xs={6}>
          <Rating readOnly defaultValue={valueOfMoney} precision={0.5} size="small" sx={{ color: '#2ea2cc' }} />
        </Grid>
      </Grid>
      <Grid item container md={6}>
        <Grid item sm={6} xs={6}>
          <Typography sx={{ fontSize: '14px', color: '#222', fontWeight: '500' }}>Tổng thể</Typography>
        </Grid>
        <Grid item sm={6} xs={6}>
          <Rating readOnly defaultValue={overall} precision={0.5} size="small" sx={{ color: '#2ea2cc' }} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default RatingReview;
