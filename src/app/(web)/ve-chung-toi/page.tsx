import Navbar from '@/common/components/navbar';
import Hero from './components/Hero';
import NumberShowcase from './components/NumberShowcase';
import OurTeam from './components/OurTeam';
import Footer from '@/common/components/footer';

const Page = () => {
  return (
    <section>
      <Navbar />
      <Hero />
      <NumberShowcase />
      <OurTeam />
      <Footer />
    </section>
  );
};

export default Page;
