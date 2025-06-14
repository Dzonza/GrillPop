import {
  createContext,
  useState,
  type FC,
  type PropsWithChildren,
} from 'react';
import FoodItems from '../components/Menu/FoodItems';

interface FoodItems {
  id: string;
  name: string;
  price: number;
  currentPrice: number;
  image: string;
}

type Items = {
  foodItems: FoodItems[];
  addItem: (id: string, name: string, price: number, image: string) => void;
  updateItems: (
    id: string,
    name: string,
    price: number,

    image: string,
    quantity: number
  ) => void;
  removeItem: (id: string) => void;
};

export const FoodList = createContext<Items>({
  foodItems: [],
  addItem: () => {},
  removeItem: () => {},
  updateItems: () => {},
});

export const FoodListProvider: FC<PropsWithChildren> = ({ children }) => {
  const [items, setItems] = useState<FoodItems[]>([]);

  const addItem = (id: string, name: string, price: number, image: string) => {
    setItems((prevValue) => [
      ...prevValue,
      { id, name, price, currentPrice: price, image },
    ]);
  };
  const updateItems = (
    id: string,
    name: string,
    price: number,

    image: string,
    quantity: number
  ) => {
    setItems((prevValue) => {
      const updateOrders = [...prevValue];
      const existingOrder = updateOrders.findIndex((item) => item.id === id);
      if (existingOrder !== -1) {
        updateOrders[existingOrder] = {
          id,
          name,
          price,
          currentPrice: price * quantity,
          image,
        };
      } else {
        updateOrders.push({ id, name, price, currentPrice: price, image });
      }
      return updateOrders;
    });
  };

  const removeItem = (id: string) => {
    const newFoodList = items.filter((item) => item.id !== id);
    setItems(newFoodList);
  };
  const contextValue: Items = {
    foodItems: items,
    addItem: addItem,
    removeItem: removeItem,
    updateItems: updateItems,
  };
  return <FoodList.Provider value={contextValue}>{children}</FoodList.Provider>;
};
