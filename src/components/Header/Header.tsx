import { faBars, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext, useState } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import useResize from '../../customHooks/useResize';
import { FoodList } from '../../store/foodList-context';
import BurgerMenu from './BurgerMenu/BurgerMenu';
import NavLinks from './NavLinks';
import SideNav from './SideNav/SideNav';
const Header = () => {
  const { foodItems } = useContext(FoodList);
  const [isActiveNav, setIsActiveNav] = useState<boolean>(false);
  const { width } = useResize();
  const [isActiveBurgerNav, setIsActiveBurgerNav] = useState<boolean>(false);
  return (
    <header className="px-5  sm:px-10 h-28 flex justify-between items-center top-0 fixed w-full bg-black z-10 max-w-[1600px] ">
      <Link to="/" className="text-center cursor-pointer">
        <h1 className="text-transparent p-1 text-4xl sm:text-5xl   font-luckiest bg-clip-text bg-[url('/images/fire.jpg')]  bg-cover ">
          GrillPop
        </h1>
      </Link>

      {width > 768 && <NavLinks />}

      <div className="flex items-center justify-center h-14 gap-5 ">
        {width < 768 && (
          <FontAwesomeIcon
            icon={faBars}
            className="h-full w-6 sm:w-8 hover:text-orange-600 duration-300 cursor-pointer"
            onClick={() => setIsActiveBurgerNav(true)}
          />
        )}
        <div
          className="relative w-6 sm:w-8 cursor-pointer flex items-center"
          onClick={() => setIsActiveNav(true)}
        >
          <FontAwesomeIcon
            icon={faShoppingCart}
            className="w-full h-full hover:text-orange-600 duration-300"
          />
          {foodItems.length > 0 && (
            <div className="absolute bg-red-800 text-white top-0 right-0 translate-x-1/2 text-sm sm:text-base -translate-y-1/2 px-1">
              {foodItems.length}
            </div>
          )}
        </div>
      </div>
      {createPortal(
        <SideNav setIsActiveNav={setIsActiveNav} isActiveNav={isActiveNav} />,
        document.body
      )}
      {createPortal(
        <BurgerMenu
          setIsActiveBurgerNav={setIsActiveBurgerNav}
          isActiveBurgerNav={isActiveBurgerNav}
        />,
        document.body
      )}
    </header>
  );
};

export default Header;
