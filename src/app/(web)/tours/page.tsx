import Navbar from '@/common/components/navbar';
import ListTours from './common/components/ListTours';
import Hero from './components/Hero';
import Footer from '@/common/components/footer';

const Page = () => {
  return (
    <section>
      <Navbar />
      <Hero />
      <ListTours />
      <Footer />
    </section>
  );
};

export default Page;
