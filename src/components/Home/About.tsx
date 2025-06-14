import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import burgerImg from '/images/burger-about.png';
const About = () => {
  const [hoveredBtn, setHoveredBtn] = useState<boolean>(false);
  return (
    <section className=" px-20 py-32 flex items-center justify-center gap-20 ">
      <div className="flex flex-col w-2/5 items-start gap-16">
        <p className="text-xl/8">
          At{' '}
          <span className="text-orange-700  text-4xl font-luckiest">
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
          to={''}
          onMouseEnter={() => setHoveredBtn(true)}
          onMouseLeave={() => setHoveredBtn(false)}
        >
          <div className="relative">
            <p
              className={`py-3 px-6  rounded-md duration-300  cursor-pointer font-luckiest ${
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
      <div className="relative w-[55%]">
        <img src={burgerImg} alt="hamburger image" />
        <div
          className={`top-0  w-full h-full absolute -z-20 bg-[url('images/about-image-2.jpg')] bg-cover brightness-[50%] `}
          style={{ clipPath: 'polygon(81% 0, 100% 69%, 22% 100%, 0 45%)' }}
        ></div>
        <div
          className={`top-0  w-full h-full absolute  brightness-[80%] -z-10 bg-[url('/images/trippy-food.jpg')]  bg-repeat bg-cover `}
          style={{
            clipPath: 'polygon(54% 0, 100% 57%, 14% 100%, 0 57%)',
            backgroundSize: '40% 40%',
          }}
        ></div>
      </div>
    </section>
  );
};

export default About;
