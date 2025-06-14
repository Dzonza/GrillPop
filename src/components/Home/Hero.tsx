import burgerHeroImg from '/images/burger-hero.svg';
const Hero = () => {
  return (
    <section className="relative pt-40">
      <img
        src={burgerHeroImg}
        alt="image of a burger"
        className="w-full h-full"
      />
    </section>
  );
};

export default Hero;
