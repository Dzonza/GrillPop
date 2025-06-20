import burgerHeroImg from '/images/burger-hero.svg';
const Hero = () => {
  return (
    <section className="relative pt-32 md:pt-40 ">
      <img
        src={burgerHeroImg}
        alt="image of a burger"
        className="h-full w-full"
      />
    </section>
  );
};

export default Hero;
