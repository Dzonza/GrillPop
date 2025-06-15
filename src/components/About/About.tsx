import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import AboutContent from './AboutContent';
import AboutHero from './AboutHero';

const About = () => {
  return (
    <section className=" max-w-[1600px] mx-auto">
      <Header />
      <AboutHero />
      <AboutContent />
      <Footer />
    </section>
  );
};

export default About;
