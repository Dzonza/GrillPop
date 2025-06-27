import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import {
  motion,
  useInView,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import burgerImg from '/images/burger-about.png';
import liquid from '/videos/liquid.mp4';
const About = () => {
  const [hoveredBtn, setHoveredBtn] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(containerRef, { amount: 0.5 });

  useEffect(() => {
    if (videoRef.current) {
      if (isInView) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [isInView]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'center center'],
  });
  const translateX = useTransform(scrollYProgress, [0, 1], ['-200px', '0px']);
  const translateY = useTransform(scrollYProgress, [0, 1], ['-400px', '0px']);
  const rawScale = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const rawOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const rawRotate = useTransform(scrollYProgress, [0, 1], ['360deg', '0deg']);
  const animateTranslateX = useSpring(translateX, {
    stiffness: 80,
    damping: 20,
    mass: 0.8,
  });
  const animateTranslateY = useSpring(translateY, {
    stiffness: 80,
    damping: 20,
    mass: 0.8,
  });
  const scale = useSpring(rawScale, {
    stiffness: 80,
    damping: 20,
    mass: 0.8,
  });
  const rotate = useSpring(rawRotate, {
    stiffness: 80,
    damping: 20,
    mass: 0.8,
  });
  const opacity = useSpring(rawOpacity, {
    stiffness: 80,
    damping: 20,
    mass: 0.8,
  });
  return (
    <section className="px-5 sm:px-20 py-20 sm:py-32 flex flex-col-reverse lg:flex-row items-center justify-center gap-16 md:gap-20 overflow-hidden">
      <div className="flex flex-col w-full lg:w-2/5 items-center md:items-start  gap-16">
        <p className="text-base/7 md:text-xl/8 text-justify  md:text-start">
          At{' '}
          <span className="text-orange-700   text-4xl font-luckiest">
            GRILLPOP
          </span>
          , we believe great taste should be fast, fresh, and affordable.
          Serving up bold flavors and satisfying bites, our menu is crafted to
          fuel your day — whether you're grabbing a quick lunch or a late-night
          snack. From juicy burgers and crispy fries to refreshing beverages and
          plant-based options, there's something for everyone at Food. Founded
          on the idea that quality ingredients make all the difference, we
          source responsibly and prepare everything with care. With speedy
          service, friendly faces, and crave-worthy meals, Food isn't just fast
          — it's food done right.
        </p>
        <Link
          to="/About"
          onMouseEnter={() => setHoveredBtn(true)}
          onMouseLeave={() => setHoveredBtn(false)}
          className="self-center lg:self-start"
        >
          <div className="relative ">
            <p
              className={`py-3 px-6   rounded-md duration-300  cursor-pointer font-luckiest ${
                hoveredBtn
                  ? 'bg-transparent translate-y-8 text-orange-600'
                  : 'bg-orange-600'
              }`}
            >
              Show more
            </p>
            <DotLottieReact
              src="/lottie/burger.lottie"
              key={hoveredBtn ? 'hovered' : 'not-hovered'}
              autoplay={hoveredBtn}
              className="absolute top-0 -translate-y-1/2 cursor-pointer"
            />
          </div>
        </Link>
      </div>
      <div className="relative w-full md:w-[75%] lg:w-[55%]" ref={containerRef}>
        <img src={burgerImg} alt="hamburger image" />
        <motion.div
          className={`top-0  w-full h-full absolute -z-20 `}
          style={{
            clipPath: 'polygon(81% 0, 100% 69%, 22% 100%, 0 45%)',
          }}
        >
          <video loop ref={videoRef} muted className="h-full object-cover">
            <source src={liquid} type="video/mp4" />
            <p>Your browser does not support the video tag.</p>
          </video>
        </motion.div>
        <motion.div
          className={`top-0  w-full left-0 h-full absolute -z-10 bg-[url('/images/trippy-food.jpg')]  bg-repeat bg-cover `}
          style={{
            clipPath: 'polygon(54% 0, 100% 57%, 14% 100%, 0 57%)',
            backgroundSize: '40% 40%',
            x: animateTranslateX,
            y: animateTranslateY,
            scale: scale,
            rotate: rotate,
            opacity: opacity,
          }}
        ></motion.div>
      </div>
    </section>
  );
};

export default About;
