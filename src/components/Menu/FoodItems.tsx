import { useCallback, useEffect, useState, type FC } from 'react';
import FoodCard from '../reusableComponents/FoodCard';
import FoodMenuButtons from './FoodMenuButtons';
import spinner from '/images/spinner.svg';
interface Food {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  blastOffer: boolean;
}

const FoodItems: FC = () => {
  const [foodData, setFoodData] = useState<Food[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [loader, setLoader] = useState<boolean>(false);

  useEffect(() => {
    async function getFoodItems() {
      try {
        setLoader(true);
        setErrorMessage('');
        const response = await fetch('http://localhost:3000/food');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setFoodData(result);
      } catch (err) {
        setErrorMessage(
          'Whoops, something went wrong, please try again later.'
        );
        console.error(err);
      } finally {
        setLoader(false);
      }
    }
    getFoodItems();
  }, []);

  const handleFilteringData = useCallback(async (course: string) => {
    try {
      setLoader(true);
      setErrorMessage('');
      const response = await fetch(
        `http://localhost:3000/food?course=${course}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      setFoodData(result);
    } catch (err) {
      setErrorMessage('Whoops, something went wrong, please try again later.');
      console.error(err);
    } finally {
      setLoader(false);
    }
  }, []);

  if (loader) {
    console.log(loader);
    return (
      <FoodMenuButtons handleFilteringData={handleFilteringData}>
        <img src={spinner} alt="loading spinner" className="w-32 " />
      </FoodMenuButtons>
    );
  }

  if (errorMessage) {
    return (
      <FoodMenuButtons handleFilteringData={handleFilteringData}>
        <p className="text-center text-white text-2xl">{errorMessage}</p>
      </FoodMenuButtons>
    );
  }

  return (
    <FoodMenuButtons handleFilteringData={handleFilteringData}>
      <section
        className={`flex  flex-wrap px-5 sm:px-20 justify-center gap-20  `}
      >
        {foodData.length > 0 ? (
          foodData.map((food) => (
            <FoodCard
              key={food.id}
              id={food.id}
              name={food.name}
              price={food.price}
              description={food.description}
              image={food.image}
              offer={food.blastOffer}
            />
          ))
        ) : (
          <p className="text-center text-white text-2xl">
            No food items found...
          </p>
        )}
      </section>
    </FoodMenuButtons>
  );
};

export default FoodItems;
