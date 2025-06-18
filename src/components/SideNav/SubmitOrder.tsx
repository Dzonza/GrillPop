import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useCallback, useContext, useState, type FC } from 'react';
import { FoodList } from '../../store/foodList-context';
import Input from '../reusableComponents/Input';
interface FormDetails {
  name: string;
  surname: string;
  address: string;
  comment: string;
}

interface SubmitOrderProps {
  setIsCheckoutClicked: (isClicked: boolean) => void;
  setIsDataSent: (isSent: boolean) => void;
  isDataSent: boolean;
}

const SubmitOrder: FC<SubmitOrderProps> = ({
  setIsCheckoutClicked,
  setIsDataSent,
  isDataSent,
}) => {
  const { foodItems } = useContext(FoodList);
  const [errorSendingData, setErrorSendingData] = useState<string>('');

  const [formData, setFormData] = useState<FormDetails>({
    name: '',
    surname: '',
    address: '',
    comment: '',
  });
  const [errorMessage, setErrorMessage] = useState<FormDetails>({
    name: '',
    surname: '',
    address: '',
    comment: '',
  });

  const handleInputField = useCallback(
    (
      e:
        | React.ChangeEvent<HTMLInputElement>
        | React.ChangeEvent<HTMLTextAreaElement>
    ) => {
      setFormData((prevValue) => ({
        ...prevValue,
        [e.target.name]: e.target.value,
      }));
    },
    []
  );
  const handleError = useCallback(
    (
      e:
        | React.ChangeEvent<HTMLInputElement>
        | React.ChangeEvent<HTMLTextAreaElement>
    ) => {
      if (!e.target.value) {
        setErrorMessage((prevValue) => ({
          ...prevValue,
          [e.target.name]: `Please fill the ${e.target.name} field.`,
        }));
      } else {
        setErrorMessage((prevValue) => ({
          ...prevValue,
          [e.target.name]: '',
        }));
      }
    },
    []
  );
  const handleSubmitOrder = useCallback(() => {
    async function submitOrder() {
      try {
        const response = await fetch('http://localhost:3000/orders', {
          method: 'POST',
          body: JSON.stringify({
            orders: foodItems,
            customerDetails: formData,
          }),
        });
        if (!response.ok) {
          throw new Error(`Somethiwn went wrong: ${response.ok}`);
        }
        setFormData({
          name: '',
          surname: '',
          address: '',
          comment: '',
        });

        setErrorSendingData('');
        setIsDataSent(true);
      } catch (err) {
        setErrorSendingData('Something went wrong, please try again.');
        console.error(err);
      }
    }
    if (formData.address && formData.name && formData.surname) {
      submitOrder();
    }
  }, [foodItems, formData, setIsDataSent]);

  if (errorSendingData) {
    return <p>{errorSendingData}</p>;
  }
  if (isDataSent) {
    setTimeout(() => {
      setIsDataSent(false);
      setIsCheckoutClicked(false);
      foodItems.length = 0;
    }, 5000);
  }
  return (
    <>
      {isDataSent ? (
        <section className="flex flex-col mt-16 items-center">
          <DotLottieReact
            src="/lottie/check.lottie"
            className="w-2/3"
            autoplay
          />
          <p className="text-[#343434] text-xl">
            Order was submitted successfully.
          </p>
        </section>
      ) : (
        <section className="mt-10 overflow-auto">
          <Input
            id="name"
            placeholder="Enter your name"
            label="Name"
            name="name"
            onChange={handleInputField}
            onBlur={handleError}
            value={formData.name}
            errorMessage={errorMessage.name}
            type="text"
          />
          <Input
            id="surname"
            placeholder="Enter your surname"
            label="Surname"
            name="surname"
            onChange={handleInputField}
            onBlur={handleError}
            value={formData.surname}
            errorMessage={errorMessage.surname}
            type="text"
          />
          <Input
            id="address"
            placeholder="Enter your address"
            label="Address"
            name="address"
            onChange={handleInputField}
            onBlur={handleError}
            value={formData.address}
            errorMessage={errorMessage.address}
            type="text"
          />
          <section className="flex flex-col">
            <label
              htmlFor="comment"
              className="pl-3 text-sm mb-1 text-orange-600 opacity-80"
            >
              Comment
            </label>
            <textarea
              className="border-[2px] border-black/40 px-3  py-2 rounded-md text-[#343434] mb-1 min-h-32 outline-orange-600"
              name="comment"
              id="comment"
              placeholder="Enter a comment here"
              onBlur={handleError}
              onChange={handleInputField}
              value={formData.comment}
            ></textarea>
          </section>
          <div className="mt-10 flex justify-between">
            <button
              onClick={() => setIsCheckoutClicked(false)}
              className=" px-3 py-2 bg-blue-500 rounded-md shadow-lg duration-300 hover:bg-blue-600"
            >
              Go Back
            </button>
            <button
              disabled={
                !formData.name || !formData.surname || !formData.address
              }
              onClick={handleSubmitOrder}
              className={`px-3 py-2 bg-green-500 rounded-md hover:bg-green-600 duration-300 ${
                (!formData.name || !formData.surname || !formData.address) &&
                'opacity-50 hover:bg-green-500'
              }`}
            >
              Submit Order
            </button>
          </div>
        </section>
      )}
    </>
  );
};

export default SubmitOrder;
