'use client';

import Container from '@/common/config/container';
import { Grid } from '@mui/material';
import TourItem from './TourItem';
import { useGetListTours } from '../../../Home/common/hooks/usegetListTours';
import { useSelector } from '@/common/redux/store';
import TourLoading from './TourLoading';
import { TitlePage } from '@/common/config/text';
import { GRAY_800 } from '@/common/constants/colors';

const ListTours = () => {
  const { dataFilter } = useSelector((state) => state.tour);
  const { listTourData, isLoading, isError, refetch } = useGetListTours({
    cityName: dataFilter.cityName,
    startDate: dataFilter.startDate,
    startPrice: dataFilter.startPrice,
    endPrice: dataFilter.endPrice,
    limit: 9,
  });

  return (
    <Container my={'50px'}>
      {isLoading ? (
        <TourLoading />
      ) : isError ? (
        <TitlePage color={GRAY_800} text="Không tìm thấy tour tương ứng theo yêu cầu của bạn" />
      ) : (
        <Grid container columnSpacing={4} rowSpacing={4}>
          {listTourData?.items?.map((tour) => (
            <Grid key={tour.title} item sm={4} xs={12}>
              <TourItem
                rate={tour?.averageRating?.totalAvg}
                id={tour?.id}
                thumbnail={tour?.image?.url}
                price={tour?.tourDetail?.price}
                title={tour?.title}
                country={tour?.city?.cityName}
                totalReviews={tour?.userReviews?.length}
                numberOfDays={5}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default ListTours;
