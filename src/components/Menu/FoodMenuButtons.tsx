import type { FC, ReactNode } from 'react';
const menuButtonStyle =
  'font-luckiest text-2xl bg-orange-600 w-36 py-2 rounded-md duration-300 hover:shadow-[10px_10px_rgba(221,107,32,0.4)] hover:bg-orange-700';

interface FoodProps {
  handleFilteringData: (value: string) => void;
  children?: ReactNode;
}

const FoodMenuButtons: FC<FoodProps> = ({ handleFilteringData, children }) => {
  return (
    <section className="flex flex-col items-center gap-20 pb-52">
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
      {children}
    </section>
  );
};

export default FoodMenuButtons;
