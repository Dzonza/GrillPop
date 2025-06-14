import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import pow from '/images/pow.png';
import retroBurger from '/images/retro-burger.jpg';
import smack from '/images/smack.png';
import burger from '/videos/burger.mp4';
import hotdog from '/videos/hotdog.mp4';
import pizza from '/videos/pizza.mp4';
const FoodHero = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  });
  const burgerRef = useRef<HTMLVideoElement>(null);
  const pizzaRef = useRef<HTMLVideoElement>(null);
  const hotdogRef = useRef<HTMLVideoElement>(null);

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

  return (
    <section className="flex gap-20 px-20 pt-40">
      <div className="w-1/2 flex flex-col justify-center items-center">
        <div className="relative w-3/5">
          <img
            src={smack}
            alt="smack comic image"
            className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2  w-3/5"
          />
          <img src={retroBurger} alt="" className="rounded-xl " />
          <img
            src={pow}
            alt="Pop image"
            className="w-3/4 absolute top-0 left-0 -translate-x-[55%] -translate-y-[55%]"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 grid-rows-3 gap-5 w-1/2" ref={ref}>
        <video
          loop={inView}
          muted
          className="rounded-md pizza-position-grid "
          ref={pizzaRef}
        >
          <source src={pizza} type="video/mp4" />
          <p>Your browser does not support the video tag.</p>
        </video>
        <div className="bg-orange-600 w-28 h-28 justify-self-center self-center"></div>
        <video
          loop={inView}
          muted
          className="rounded-md burger-position-grid "
          ref={burgerRef}
        >
          <source src={burger} type="video/mp4" />
          <p>Your browser does not support the video tag.</p>
        </video>
        <div className="bg-blue-500 w-28 h-28 rounded-[50%] justify-self-center self-center"></div>
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
          className="bg-purple-600 w-28 h-28 justify-self-center self-center"
          style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
        ></div>
      </div>
    </section>
  );
};

export default FoodHero;
