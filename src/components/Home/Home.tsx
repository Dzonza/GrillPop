import type { FC } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import About from './About';
import Hero from './Hero';
import PromoFoodItems from './PromoFoodItems';
import SloganHero from './SloganHero';
import Testimonials from './Testimonials';

const Home: FC = () => {
  return (
    <section className="max-w-[1600px] mx-auto">
      <Header />
      <Hero />
      <SloganHero />
      <About />
      <PromoFoodItems />
      <Testimonials />
      <Footer />
    </section>
  );
};

export default Home;
