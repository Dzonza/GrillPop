import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import team from '/images/zombie.png';

const AboutHero = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  const scale = useTransform(scrollY, [0, 500], [1, 0.6]);

  const smoothOpacity = useSpring(opacity, {
    stiffness: 100,
    damping: 15,
  });

  const smoothScale = useSpring(scale, {
    stiffness: 60,
    damping: 6,
  });
  return (
    <motion.section
      style={{ opacity: smoothOpacity, scale: smoothScale }}
      className="fixed top-0 pt-32 max-w-[1600px] sm:pt-40 pb-20 lg:pb-40 "
    >
      <img src={team} alt="lonely zombie" className="w-full" />
    </motion.section>
  );
};

export default AboutHero;
