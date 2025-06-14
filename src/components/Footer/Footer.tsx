import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import footerBurger from '/images/footer-burger.png';
import footerRamen from '/images/footer-ramen.png';
const Footer = () => {
  const getYear = useMemo(() => {
    const date = new Date();
    return date.getFullYear();
  }, []);

  return (
    <section className="flex flex-col items-center gap-10 pt-16 border-t-2 border-orange-600 relative overflow-hidden">
      <img
        src={footerBurger}
        alt="burger"
        className="absolute  w-[30%] top-0 left-0 -translate-y-20"
      />
      <img
        src={footerRamen}
        alt="burger"
        className="absolute  w-[30%] top-0 -right-28 -rotate-[30deg]"
      />
      <nav className="flex gap-16 text-xl font-semibold tracking-[3px] ">
        <Link to="/Menu" className="duration-300 hover:text-orange-600">
          Menu
        </Link>
        <Link to="/About" className="duration-300 hover:text-orange-600">
          About
        </Link>
        <Link to="/Contact" className="duration-300 hover:text-orange-600">
          Contact
        </Link>
      </nav>
      <h1 className="text-transparent p-1 text-7xl   font-luckiest bg-clip-text bg-[url('/images/fire.jpg')]  bg-cover ">
        GrillPop
      </h1>
      <p>
        &copy; <span>{getYear}</span> GrillPop. All rights are reserved.
      </p>
    </section>
  );
};

export default Footer;
