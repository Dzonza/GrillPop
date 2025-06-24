import { faSquareXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'motion/react';
import type { FC } from 'react';
import { Link } from 'react-router-dom';
import burger from '/images/footer-burger.png';
interface BurgerProps {
  setIsActiveBurgerNav: (isActive: boolean) => void;
  isActiveBurgerNav: boolean;
}

const BurgerMenu: FC<BurgerProps> = ({
  setIsActiveBurgerNav,
  isActiveBurgerNav,
}) => {
  return (
    <section
      className={`fixed top-0 left-0 z-50 w-full h-full bg-black flex justify-center items-center duration-300 ${
        isActiveBurgerNav ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <img
        src={burger}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 opacity-25"
        alt=""
      />
      <motion.div
        className="absolute top-8 right-8 h-10 cursor-pointer text-red-600"
        initial={{
          opacity: 0.8,
          transition: { duration: 1, type: 'spring', stiffness: 100 },
        }}
        whileHover={{
          opacity: 1,
          rotate: 180,
          transition: { duration: 0.3, stiffness: 60, damping: 5 },
        }}
        onClick={() => setIsActiveBurgerNav(false)}
      >
        <FontAwesomeIcon icon={faSquareXmark} className="w-full h-full " />
      </motion.div>

      <div className="flex flex-col gap-10 text-xl font-semibold tracking-[3px] items-center">
        <Link
          to="/Menu"
          className="cursor-pointer p-1 duration-200 hover:bg-orange-600"
          onClick={() => setIsActiveBurgerNav(false)}
        >
          Menu
        </Link>
        <Link
          to="/About"
          className="cursor-pointer p-1 duration-200 hover:bg-orange-600"
          onClick={() => setIsActiveBurgerNav(false)}
        >
          About
        </Link>
        <Link
          to="/Contact"
          className="cursor-pointer p-1 duration-200 hover:bg-orange-600"
          onClick={() => setIsActiveBurgerNav(false)}
        >
          Contact
        </Link>
      </div>
    </section>
  );
};

export default BurgerMenu;
