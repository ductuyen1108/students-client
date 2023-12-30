import { Avatar, Box, Stack, Typography } from '@mui/material';
import RatingReview from './RatingReview';
import { IUserReviews } from '../interface';
import { convertDate } from '@/common/utils/convertData';

interface Props {
  userReviews: IUserReviews[];
}

const TourReviews = ({ userReviews }: Props) => {
  return (
    <>
      {userReviews?.map((item) => (
        <Box key={item.id} sx={{ py: '30px', borderBottom: '1px dashed #dce0e0' }}>
          <Stack spacing={3} direction={'row'}>
            <Avatar
              src={item?.user?.customer?.avatar?.url ? item?.user?.customer?.avatar?.url : '/images/tours/hero.jpg'}
              alt=""
              sx={{ width: '70px', height: '70px', boxShadow: '0 0px 15px rgba(0,0,0,.3)' }}
            />
            <Box>
              <Typography sx={{ fontSize: '16px', fontWeight: 600, color: '#000' }}>
                {item?.user?.customer?.name}
              </Typography>
              <Typography sx={{ fontSize: '11px', fontWeight: 500, color: '#999' }}>
                {convertDate({ data: item?.user?.customer?.createdAt })}
              </Typography>
              <Typography sx={{ fontSize: '15px', fontWeight: 300, color: '#000', py: '10px' }}>
                {item.reviewContent}
              </Typography>
              <RatingReview
                accomodation={item?.UserReviewDetail?.accommodation}
                destination={item?.UserReviewDetail?.destination}
                meals={item?.UserReviewDetail?.meals}
                transport={item?.UserReviewDetail?.transport}
                valueOfMoney={5}
                overall={item?.UserReviewDetail?.overall}
              />
            </Box>
          </Stack>
        </Box>
      ))}
    </>
  );
};

export default TourReviews;
