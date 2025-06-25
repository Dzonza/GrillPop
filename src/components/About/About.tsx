import { useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import AboutContent from './AboutContent';
import AboutHero from './AboutHero';

const About = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Section 2 comes up from 100px below to 0px
  const translateY = useTransform(scrollYProgress, [0, 1], ['1000px', '0px']);

  return (
    <section className="max-w-[1600px] mx-auto" ref={containerRef}>
      <Header />
      <AboutHero />
      <AboutContent moveUp={translateY} />
      <Footer />
    </section>
  );
};

export default About;
