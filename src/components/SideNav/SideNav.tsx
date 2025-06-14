import { faSquareXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext, useState, type FC } from 'react';
import { FoodList } from '../../store/foodList-context';
import OrderList from './OrderList';
import SubmitOrder from './SubmitOrder';
import sideNavBg from '/images/side-nav-bg.jpg';
interface SideNavProps {
  isActiveNav: boolean;
  setIsActiveNav: (isActive: boolean) => void;
}

const SideNav: FC<SideNavProps> = ({ isActiveNav, setIsActiveNav }) => {
  const [isCheckoutClicked, setIsCheckoutClicked] = useState<boolean>(false);
  const [isDataSent, setIsDataSent] = useState<boolean>(false);
  const { foodItems } = useContext(FoodList);
  return (
    <section
      className={`fixed top-0 right-0 h-full bg-white w-96 p-5 transform transition-transform ease-in-out duration-500 flex flex-col z-20 overflow-hidden  ${
        isActiveNav ? ' translate-x-0' : 'translate-x-full'
      }`}
    >
      <FontAwesomeIcon
        icon={faSquareXmark}
        className="w-10 h-10 cursor-pointer duration-500 hover:rotate-180 sticky top-0 self-end text-orange-600"
        onClick={() => setIsActiveNav(false)}
      />
      {foodItems.length > 0 && (
        <div className="flex justify-center items-center ">
          <div
            className={`w-12 h-12 border border-black/50 flex justify-center items-center rounded-full duration-300 ${
              isCheckoutClicked && 'bg-green-500 border-none'
            }`}
          >
            <p
              className={`text-[#343434] opacity-80 text-2xl duration-300 ${
                isCheckoutClicked && 'text-[#fff]'
              }`}
            >
              1
            </p>
          </div>
          <div className="border-b-4 border-dashed border-orange-600  w-14 h-[0.1px]"></div>
          <div
            className={`w-12 h-12 border border-black/50 flex justify-center items-center rounded-full ${
              isDataSent && 'bg-green-500 border-none'
            }`}
          >
            <p
              className={`text-[#343434] opacity-80 text-2xl ${
                isDataSent && 'text-[#fff]'
              }`}
            >
              2
            </p>
          </div>
        </div>
      )}
      {isCheckoutClicked ? (
        <SubmitOrder
          setIsCheckoutClicked={setIsCheckoutClicked}
          setIsDataSent={setIsDataSent}
          isDataSent={isDataSent}
        />
      ) : (
        <OrderList setIsCheckoutClicked={setIsCheckoutClicked} />
      )}
      <img
        src={sideNavBg}
        alt="side nav background image"
        className="absolute bottom-0 -z-10 left-0 scale-125 opacity-25"
      />
    </section>
  );
};

export default SideNav;
