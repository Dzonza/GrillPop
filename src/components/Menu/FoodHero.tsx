import { motion, useScroll, useSpring, useTransform } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import burger3d from '/images/3d-burger.png';
import donut3d from '/images/3d-donut.png';
import cloud1 from '/images/cloud-1.png';
import cloud2 from '/images/cloud-2.png';
import cloud3 from '/images/cloud-3.png';
import burger from '/videos/burger.mp4';
import hotdog from '/videos/hotdog.mp4';
import pizza from '/videos/pizza.mp4';
const FoodHero = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  });
  const [contentHeight, setContentHeight] = useState<number>(0);
  const burgerRef = useRef<HTMLVideoElement>(null);
  const pizzaRef = useRef<HTMLVideoElement>(null);
  const hotdogRef = useRef<HTMLVideoElement>(null);
  const heroContainerRef = useRef<HTMLElement>(null);
  useEffect(() => {
    if (inView && burgerRef && pizzaRef && hotdogRef) {
      burgerRef.current!.play();
      pizzaRef.current!.play();
      hotdogRef.current!.play();
    } else {
      burgerRef.current!.pause();
      pizzaRef.current!.pause();
      hotdogRef.current!.pause();
    }
  }, [inView]);

  useEffect(() => {
    if (!heroContainerRef.current) {
      return;
    }
    const el = heroContainerRef.current.parentElement;

    if (!el) return;

    const update = () => setContentHeight(el.getBoundingClientRect().height);
    setTimeout(() => {
      update();
    }, 300);

    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, [contentHeight]);

  const { scrollY } = useScroll();
  const rawRotateBurger = useTransform(
    scrollY,
    [0, contentHeight],
    ['0deg', '360deg']
  );
  const rawOpacityBurger = useTransform(scrollY, [0, 1000], [1, 0.4]);
  const rotateBurger = useSpring(rawRotateBurger, {
    stiffness: 300,
    damping: 20,
    mass: 0.7,
  });
  const opacityBurger = useSpring(rawOpacityBurger, {
    stiffness: 100,
    damping: 20,
    mass: 0.7,
  });

  const rawRotateDonut = useTransform(
    scrollY,
    [0, contentHeight],
    ['0deg', '-360deg']
  );
  const rawOpacityDonut = useTransform(scrollY, [0, 1500], [0, 0.4]);
  const rotateDonut = useSpring(rawRotateDonut, {
    stiffness: 300,
    damping: 20,
    mass: 0.7,
  });
  const opacityDonut = useSpring(rawOpacityDonut, {
    stiffness: 100,
    damping: 20,
    mass: 0.7,
  });

  const rawScale = useTransform(scrollY, [0, 1000], [1, 0]);
  const scale = useSpring(rawScale, {
    stiffness: 300,
    damping: 20,
    mass: 0.7,
  });
  return (
    <section
      className="flex flex-col lg:flex-row gap-20 px-5 sm:px-20 pt-32 md:pt-40"
      ref={heroContainerRef}
    >
      <div className=" w-full lg:w-1/2 flex flex-col justify-center items-center relative">
        <motion.div
          style={{ scale: scale }}
          className=" w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] bg-blue-500 rounded-[50%] -z-10"
        ></motion.div>
        <motion.img
          style={{ scale: scale }}
          className="absolute top-0 sm:top-14 left-0 w-[150px] sm:w-[200px] md:w-[250px]"
          src={cloud1}
          alt="image of a cloud"
        />
        <motion.img
          style={{ scale: scale }}
          className="absolute top-1/2 right-0 w-[100px] sm:w-[150px] md:w-[200px] -z-10"
          src={cloud2}
          alt="image of a cloud"
        />
        <motion.img
          style={{ scale: scale }}
          className="absolute bottom-0 md:bottom-10 left-0 sm:left-10 w-[200px] sm:w-[300px] md:w-[350px]"
          src={cloud3}
          alt="image of a cloud"
        />
        <motion.img
          initial={{ rotate: 0 }}
          style={{ rotate: rotateBurger, opacity: opacityBurger }}
          src={burger3d}
          alt="burger"
          className="w-[500px] -z-10 fixed"
        />
      </div>
      <div
        className="grid grid-cols-2 grid-rows-3 gap-5 w-full lg:w-1/2"
        ref={ref}
      >
        <video
          loop={inView}
          muted
          className="rounded-md pizza-position-grid "
          ref={pizzaRef}
        >
          <source src={pizza} type="video/mp4" />
          <p>Your browser does not support the video tag.</p>
        </video>
        <div className=" bg-orange-600 w-14 h-14 sm:w-28 sm:h-28 justify-self-center self-center"></div>
        <video
          loop={inView}
          muted
          className="rounded-md burger-position-grid "
          ref={burgerRef}
        >
          <source src={burger} type="video/mp4" />
          <p>Your browser does not support the video tag.</p>
        </video>
        <div className=" bg-blue-500 w-14 h-14 sm:w-28 sm:h-28 rounded-[50%] justify-self-center self-center"></div>
        <video
          loop={inView}
          muted
          className="rounded-md hotdog-position-grid"
          ref={hotdogRef}
        >
          <source src={hotdog} type="video/mp4" />
          <p>Your browser does not support the video tag.</p>
        </video>
        <div
          className=" bg-purple-600 w-14 h-14 sm:w-28 sm:h-28 justify-self-center self-center"
          style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
        ></div>
        <motion.img
          style={{ opacity: opacityDonut, rotate: rotateDonut, x: 200 }}
          src={donut3d}
          alt="donut"
          className="hidden lg:block w-[300px] sm:w-[400px] -z-10 fixed top-20 "
        />
      </div>
    </section>
  );
};

export default FoodHero;
