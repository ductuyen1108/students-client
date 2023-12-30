'use client';

import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/pagination';
import { DescPage, TitlePage } from '@/common/config/text';
import { Box } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import TourItem from '@/app/(web)/tours/common/components/TourItem';
import { useGetListTours } from '../hooks/usegetListTours';

const Tours = () => {
  const { listTourData, isLoading } = useGetListTours({ page: 1, limit: 4 });
  console.log('list tour', listTourData);
  return (
    <Box sx={{ my: '100px' }}>
      <Box sx={{ maxWidth: '1350px', mx: 'auto', width: '100%', px: '20px' }}>
        <Box sx={{ textAlign: 'center' }}>
          <TitlePage text="Tour du lịch hot!" color="#000000" />
          <DescPage text="Những tour du lịch hot nhất thời điểm hiện tại" color="#8D9199" />
        </Box>
        <Box mt="50px">
          <Swiper
            style={{ padding: '10px 25px 40px 25px' }}
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination]}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
          >
            {listTourData?.items?.map((tour) => (
              <SwiperSlide key={tour?.title} style={{ width: '100%' }}>
                <TourItem
                  id={tour?.id}
                  thumbnail={tour?.image?.url}
                  price={tour?.tourDetail?.price}
                  title={tour?.title}
                  country={tour?.city?.cityName}
                  totalReviews={tour?.userReviews.length}
                  numberOfDays={5}
                  rate={tour?.averageRating?.totalAvg}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Box>
    </Box>
  );
};

export default Tours;
