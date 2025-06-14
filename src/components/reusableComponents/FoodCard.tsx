import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useCallback, useContext, useState, type FC } from 'react';
import { useInView } from 'react-intersection-observer';
import { FoodList } from '../../store/foodList-context';
interface Card {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  offer: boolean;
}

const FoodCard: FC<Card> = ({ id, name, price, description, image, offer }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const { foodItems, addItem } = useContext(FoodList);
  const { ref, inView } = useInView({
    threshold: 0,
  });

  const handleAddingItem = useCallback(() => {
    const itemExists = foodItems.find((item) => item.id === id);
    if (itemExists) {
      return;
    } else {
      addItem(id, name, price, image);
    }
  }, [foodItems, addItem, id, name, price, image]);

  return (
    <article
      className=" flex flex-col w-96 gap-5 h-full  justify-between relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      ref={ref}
    >
      {inView && offer && (
        <DotLottieReact
          src="/lottie/flame.lottie"
          autoplay
          loop
          speed={0.8}
          className="absolute top-2 left-0 w-24 -translate-x-3 z-[5]"
        />
      )}
      <div className="overflow-hidden w-full h-96 rounded-lg ">
        <img
          src={image}
          alt={name}
          className={` duration-500 w-full h-96  ${isHovered && 'scale-110'} `}
        />
      </div>

      <h2>{name}</h2>
      <p className="opacity-80">{description}</p>
      <div className="flex justify-between  ">
        <p className="text-orange-600 text-xl p-3 bg-orange-950 rounded-md w-24 text-center  ">
          {price} &euro;
        </p>
        <button
          onClick={handleAddingItem}
          className="p-3 bg-orange-600 rounded-md duration-500 hover:bg-orange-800 cursor-pointer"
        >
          Add to cart
        </button>
      </div>
    </article>
  );
};

export default FoodCard;
