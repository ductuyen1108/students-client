import Navbar from '@/common/components/navbar';
import Articles from './(web)/Home/common/components/Articles';
import Destination from './(web)/Home/common/components/Destinations';
import Hero from './(web)/Home/common/components/Hero';
import Partners from './(web)/Home/common/components/Partners';
import Tours from './(web)/Home/common/components/Tours';
import WhyChoose from './(web)/Home/common/components/WhyChoose';
import Footer from '@/common/components/footer';

export default function Home() {
  return (
    <section>
      <Navbar />
      <Hero />
      <Articles />
    </section>
  );
}
