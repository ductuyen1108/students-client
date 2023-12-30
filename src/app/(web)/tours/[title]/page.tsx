'use client';

import ScrollTopBtn from '@/common/components/ScrollTopBtn';
import { useGetTourDetails } from '../../Home/common/hooks/useGetTourDetails';
import Hero from './components/Hero';
import TourContent from './components/TourContent';
import Navbar from '@/common/components/navbar';
import Footer from '@/common/components/footer';

const Page = ({ params }: { params: { title: number } }) => {
  const { tourDetails } = useGetTourDetails(params.title);
  return (
    <section>
      <Navbar />
      <Hero url={tourDetails?.image?.url || ''} />
      <TourContent details={tourDetails} />
      <ScrollTopBtn />
      <Footer />
    </section>
  );
};

export default Page;
