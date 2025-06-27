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
  const smallScreenMoveUp = useTransform(
    scrollYProgress,
    [0, 1],
    ['450px', '0px']
  );
  const translateY = useTransform(scrollYProgress, [0, 1], ['1000px', '0px']);

  return (
    <section className="max-w-[1600px] mx-auto">
      <Header />
      <section ref={containerRef} className="overflow-hidden">
        <AboutHero />
        <AboutContent
          moveUp={translateY}
          smallScreenMoveUp={smallScreenMoveUp}
        />
      </section>
      <Footer />
    </section>
  );
};

export default About;
