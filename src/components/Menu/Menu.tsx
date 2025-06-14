import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import FoodHero from './FoodHero';
import FoodItems from './FoodItems';
import PromoCards from './PromoCards';

const Menu = () => {
  return (
    <section className="max-w-[1600px] mx-auto">
      <Header />
      <FoodHero />
      <PromoCards />
      <FoodItems />
      <Footer />
    </section>
  );
};

export default Menu;
