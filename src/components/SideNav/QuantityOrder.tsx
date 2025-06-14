import {
  faCaretLeft,
  faCaretRight,
  faTrashCan,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCallback, useContext, useState, type FC } from 'react';
import { FoodList } from '../../store/foodList-context';
interface Item {
  name: string;
  price: number;
  image: string;
  id: string;
}
const QuantityOrder: FC<Item> = ({ name, price, image, id }) => {
  const [currentNumber, setCurrentNumber] = useState<number>(1);
  const { updateItems, removeItem } = useContext(FoodList);

  const handleIncreaseQuantity = useCallback(() => {
    setCurrentNumber((prevValue) => {
      const currentValue = prevValue + 1;
      updateItems(id, name, price, image, currentValue);
      return currentValue;
    });
  }, [setCurrentNumber, updateItems, id, name, price, image]);

  const handleDecreaseQuantity = useCallback(() => {
    setCurrentNumber((prevValue) => {
      if (prevValue === 1) {
        return prevValue;
      }
      const currentValue = prevValue - 1;
      updateItems(id, name, price, image, currentValue);
      return currentValue;
    });
  }, [setCurrentNumber, updateItems, id, name, price, image]);

  return (
    <div className="flex gap-5 py-5 border-b-black/20 border-b-[1px] items-center ">
      <img src={image} alt="food image" className="h-24  rounded-md" />

      <div className="flex flex-col justify-evenly w-full">
        <h3 className="text-[#343434]">{name}</h3>
        <p className="text-[#343434]">
          {price} &euro;{' '}
          <span className="opacity-40 italic text-xs">(per each)</span>
        </p>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <FontAwesomeIcon
              icon={faCaretLeft}
              className={`w-5 h-5 cursor-pointer text-orange-600 ${
                currentNumber === 1 && 'opacity-50'
              }`}
              onClick={handleDecreaseQuantity}
            />
            <p className="text-black">{currentNumber}</p>
            <FontAwesomeIcon
              icon={faCaretRight}
              onClick={handleIncreaseQuantity}
              className="cursor-pointer w-5 h-5 text-orange-600"
            />
          </div>
          <FontAwesomeIcon
            icon={faTrashCan}
            className="w-5 h-5 mr-3 cursor-pointer duration-300 text-[#dc3545] hover:text-[#9b2430]"
            onClick={() => removeItem(id)}
          />
        </div>
      </div>
    </div>
  );
};

export default QuantityOrder;
