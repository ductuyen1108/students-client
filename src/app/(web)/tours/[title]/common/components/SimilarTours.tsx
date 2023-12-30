'use client';

import 'swiper/css';
import 'swiper/css/effect-creative';
import { Box } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { Typography } from '@mui/material';
import TourItem from '@/app/(web)/tours/common/components/TourItem';
import { useGetListTours } from '@/app/(web)/Home/common/hooks/usegetListTours';

const SimilarTours = ({ id }: { id?: number }) => {
  const { listTourData } = useGetListTours({});
  const similarTours = listTourData?.items.filter((item) => item.id !== id);
  return (
    <Box sx={{ my: '50px' }}>
      <Box sx={{ maxWidth: '1350px', mx: 'auto', width: '100%', px: '20px' }}>
        <Typography sx={{ px: '25px', fontSize: '20px', fontWeight: 600, color: '#000' }}>Tour tương tự</Typography>
        <Box>
          <Swiper
            style={{ padding: '10px 25px 40px 25px' }}
            slidesPerView={1}
            spaceBetween={10}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
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
            {similarTours?.map((data) => (
              <SwiperSlide key={data.id} style={{ width: '100%' }}>
                <TourItem
                  id={data?.id}
                  country={data?.city?.cityName}
                  numberOfDays={5}
                  price={data?.tourDetail?.price}
                  thumbnail={data?.image?.url}
                  title={data?.title}
                  totalReviews={data?.userReviews?.length}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Box>
    </Box>
  );
};

export default SimilarTours;
