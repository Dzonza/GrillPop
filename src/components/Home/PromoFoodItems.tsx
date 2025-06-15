import { useEffect, useState, type FC } from 'react';
import { Link } from 'react-router-dom';
import FoodCard from '../reusableComponents/FoodCard';
import blastImg from '/images/blast.png';
import spinner from '/images/spinner.svg';
interface FoodItem {
  id: string;
  name: string;
  price: string;
  description: string;
  image: string;
  blastOffer: boolean;
}

const PromoFoodItems: FC = () => {
  const [deals, setDeals] = useState<FoodItem[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [loader, setLoader] = useState<boolean>(false);
  const [hoveredMenuBtn, setHoveredMenuBtn] = useState<boolean>(false);
  useEffect(() => {
    async function getData() {
      try {
        setLoader(true);
        setErrorMessage('');
        const response = await fetch(
          `http://localhost:3000/food?blastOffer=true`
        );
        if (!response.ok) {
          throw new Error(
            `Cant find item with a chosen id, ${response.status}`
          );
        }
        const data = await response.json();
        setDeals(data);
      } catch (err) {
        console.error(err);
        setErrorMessage('Failed to fetch data... Please try again later.');
      } finally {
        setLoader(false);
      }
    }

    getData();
  }, []);

  if (errorMessage) {
    return <p>{errorMessage}</p>;
  }

  if (loader) {
    return <img src={spinner} alt="loading spinner" className="w-32 " />;
  }

  return (
    <section className="px-20 py-32 flex flex-col items-center gap-20">
      <div className="relative mb-32">
        <h2 className="uppercase font-luckiest text-8xl font-medium text-orange-600 ">
          Blast Offers
        </h2>
        <img
          src={blastImg}
          alt="comic blast image"
          className="absolute top-[50%] left-0 w-[200%] -translate-x-[30%] -translate-y-1/2 -z-10"
        />
      </div>
      <section className="flex flex-wrap gap-20 items-center justify-center">
        {deals.map((item) => {
          return (
            <FoodCard
              id={item.id}
              name={item.name}
              price={+item.price}
              description={item.description}
              image={item.image}
              offer={item.blastOffer}
            />
          );
        })}
      </section>
      <Link
        to="/Menu"
        className="relative cursor-pointer h-36 w-36 flex justify-center items-center"
        onMouseEnter={() => setHoveredMenuBtn(true)}
        onMouseLeave={() => setHoveredMenuBtn(false)}
      >
        <p
          className={`py-3 px-6 bg-orange-600 h-full w-full  duration-500   cursor-pointer  flex justify-center items-center font-luckiest text-2xl ${
            hoveredMenuBtn ? 'bg-white  text-white rounded-[50%]' : 'rounded-md'
          }`}
        >
          Menu
        </p>
        <p
          className={`absolute font-luckiest text-orange-600 top-1/2 left-1/2 text-9xl -translate-x-1/2 -translate-y-1/2 duration-500   ${
            hoveredMenuBtn ? 'scale-100 ' : 'scale-0'
          }`}
        >
          Menu
        </p>
      </Link>
    </section>
  );
};

export default PromoFoodItems;
