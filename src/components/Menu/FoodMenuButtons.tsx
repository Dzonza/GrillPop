import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCallback, useRef, useState, type FC, type ReactNode } from 'react';
import useResize from '../../customHooks/useResize';
const menuButtonStyle =
  'font-luckiest text-2xl bg-orange-600 w-36 py-2 rounded-md duration-300 hover:shadow-[10px_10px_rgba(221,107,32,0.4)] hover:bg-orange-700';

interface FoodProps {
  handleFilteringData: (value: string) => void;
  children?: ReactNode;
}

const FoodMenuButtons: FC<FoodProps> = ({ handleFilteringData, children }) => {
  const { width } = useResize();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const foodMenu = useRef<HTMLElement>(null);
  const handleClickedMenuBtn = useCallback(
    (menuType: string) => {
      handleFilteringData(menuType);
      setIsMenuOpen(false);
      if (foodMenu.current) {
        const { top } = foodMenu.current.getBoundingClientRect();
        window.scrollTo({
          top: window.scrollY + top - 130,
          behavior: 'smooth',
        });
      }
    },
    [handleFilteringData]
  );
  return (
    <section
      className="flex flex-col items-center lg:gap-20 pb-32 sm:pb-52"
      ref={foodMenu}
    >
      {width < 1024 ? (
        <section
          className={`fixed top-1/3 right-0 w-64 bg-black border-y-2 border-l-2 z-50 rounded-bl-md border-orange-500 p-10 duration-300 ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <article className="flex flex-col gap-5 justify-center">
            <button
              className="text-white text-xl duration-200 hover:text-orange-600"
              onClick={() => {
                handleClickedMenuBtn('starter');
              }}
            >
              Starters
            </button>
            <button
              className="text-white text-xl duration-200 hover:text-orange-600"
              onClick={() => handleClickedMenuBtn('salad')}
            >
              Salads
            </button>
            <button
              className="text-white text-xl duration-200 hover:text-orange-600"
              onClick={() => handleClickedMenuBtn('pasta')}
            >
              Pasta
            </button>
            <button
              className="text-white text-xl duration-200 hover:text-orange-600"
              onClick={() => handleClickedMenuBtn('burger')}
            >
              Burgers
            </button>
            <button
              className="text-white text-xl duration-200 hover:text-orange-600"
              onClick={() => handleClickedMenuBtn('main')}
            >
              Main
            </button>
          </article>
          <div
            className={`absolute flex flex-col justify-center items-center top-0 left-0 -translate-y-[1.7px] p-4 -translate-x-full   rounded-l-md border-orange-500 duration-300 cursor-pointer border-y-2 border-l-2 ${
              isMenuOpen ? 'bg-black ' : 'bg-orange-500'
            }`}
            onClick={() => setIsMenuOpen((prevValue) => !prevValue)}
          >
            <FontAwesomeIcon
              icon={faChevronLeft}
              className={`h-7 duration-300 ${
                isMenuOpen ? 'rotate-180 text-orange-600' : 'rotate-0 '
              }`}
            />
          </div>
        </section>
      ) : (
        <article className="flex gap-10 justify-center">
          <button
            className={menuButtonStyle}
            onClick={() => handleFilteringData('starter')}
          >
            Starters
          </button>
          <button
            className={menuButtonStyle}
            onClick={() => handleFilteringData('salad')}
          >
            Salads
          </button>
          <button
            className={menuButtonStyle}
            onClick={() => handleFilteringData('pasta')}
          >
            Pasta
          </button>
          <button
            className={menuButtonStyle}
            onClick={() => handleFilteringData('burger')}
          >
            Burgers
          </button>
          <button
            className={menuButtonStyle}
            onClick={() => handleFilteringData('main')}
          >
            Main
          </button>
        </article>
      )}
      {children}
    </section>
  );
};

export default FoodMenuButtons;
