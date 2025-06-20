import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useContext, type FC } from 'react';
import { FoodList } from '../../../store/foodList-context';
import QuantityOrder from './QuantityOrder';

const OrderList: FC<{ setIsCheckoutClicked: (isClicked: boolean) => void }> = ({
  setIsCheckoutClicked,
}) => {
  const { foodItems } = useContext(FoodList);
  return (
    <>
      <div className="flex flex-col  items-center my-10 ">
        <h2 className="text-orange-600 text-5xl font-bold">Orders</h2>
        <div className="w-20 h-1 bg-orange-600 "></div>
      </div>
      <article className="overflow-auto max-h-[60vh] bg-white">
        {foodItems.length === 0 ? (
          <section>
            <DotLottieReact src="/lottie/hiding.lottie" autoplay loop />
            <p className="text-black text-center text-xl">
              There are no orders to display.
            </p>
          </section>
        ) : (
          <>
            {foodItems.map((item) => (
              <QuantityOrder
                name={item.name}
                price={item.price}
                image={item.image}
                key={item.id}
                id={item.id}
              />
            ))}
          </>
        )}
      </article>
      {foodItems.length > 0 && (
        <div className="flex justify-between pt-3 px-1 items-center border-t-[1px] bg-white rounded-b-md">
          <p className="text-[#343434] text-lg">Total</p>
          <p className="text-[#343434] text-lg">
            {foodItems
              .reduce((acc, { currentPrice }) => acc + +currentPrice, 0)
              .toFixed(2)}{' '}
            &euro;
          </p>
        </div>
      )}
      {foodItems.length > 0 && (
        <button
          onClick={() => setIsCheckoutClicked(true)}
          className="text-white py-2 bg-orange-600 mt-10 rounded-md duration-500 hover:bg-orange-700"
        >
          Proceed to Checkout
        </button>
      )}
    </>
  );
};

export default OrderList;
