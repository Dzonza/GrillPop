import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import useResize from '../../customHooks/useResize';
import team from '/images/zombie.png';
const AboutHero = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  const scale = useTransform(scrollY, [0, 500], [1, 0.6]);
  const { width } = useResize();
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
      className="fixed top-0 pt-32 max-w-[1600px] sm:pt-40 pb-20 lg:pb-40 flex flex-col gap-10 "
    >
      {width >= 550 && (
        <img src={team} alt="lonely zombie" className="w-full" />
      )}
      {width < 550 && (
        <div className="relative bg-[url('/images/about-hero-bg.jpg')] bg-cover rounded-md">
          <DotLottieReact
            src="lottie/weird-eye.lottie"
            autoplay
            loop
            className="w-full"
          />
          <p className="font-luckiest text-4xl absolute -bottom-10 pl-5 ">
            We <br /> add some <br />
            <span className="text-red-500">happy powder</span>.
          </p>
        </div>
      )}
    </motion.section>
  );
};

export default AboutHero;
