import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useCallback, useEffect, useState, type FC } from 'react';
import Input from '../reusableComponents/Input';

interface ContactDetails {
  name: string;
  surname: string;
  email: string;
  comment: string;
}

const ContactForm: FC = () => {
  const [contactData, setContactData] = useState<ContactDetails>({
    name: '',
    surname: '',
    email: '',
    comment: '',
  });

  const [errorMessage, setErrorMessage] = useState<ContactDetails>({
    name: '',
    surname: '',
    email: '',
    comment: '',
  });
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleContactFields = useCallback(
    (
      e:
        | React.ChangeEvent<HTMLInputElement>
        | React.ChangeEvent<HTMLTextAreaElement>
    ) => {
      setContactData((prevValue) => ({
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
  useEffect(() => {
    if (isSubmitted) {
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }
  }, [isSubmitted]);
  const handleSubmitContactForm = useCallback(() => {
    if (
      contactData.name &&
      contactData.surname &&
      contactData.email &&
      contactData.comment
    ) {
      setIsSubmitted(true);
      setContactData({
        name: '',
        surname: '',
        email: '',
        comment: '',
      });
    }
  }, [
    contactData.name,
    contactData.surname,
    contactData.email,
    contactData.comment,
  ]);

  if (isSubmitted) {
    return (
      <section className="w-1/2 flex flex-col justify-center items-center h-[410px]">
        <DotLottieReact src="/lottie/check.lottie" className="w-1/2" autoplay />
        <p className="text-xl">Thanks for sticking with us! 🍔</p>
      </section>
    );
  }

  return (
    <section className="w-full lg:w-1/2">
      <div>
        <div className="flex flex-col sm:flex-row sm:gap-10">
          <Input
            id="name"
            placeholder="Enter your name"
            label="Name"
            name="name"
            onChange={handleContactFields}
            onBlur={handleError}
            value={contactData.name}
            errorMessage={errorMessage.name}
            type="text"
          />
          <Input
            id="surname"
            placeholder="Enter your surname"
            label="Surname"
            name="surname"
            onChange={handleContactFields}
            onBlur={handleError}
            value={contactData.surname}
            errorMessage={errorMessage.surname}
            type="text"
          />
        </div>
        <Input
          id="email"
          placeholder="Enter your email"
          label="Email"
          name="email"
          onChange={handleContactFields}
          onBlur={handleError}
          value={contactData.email}
          errorMessage={errorMessage.email}
          type="email"
        />
        <div className="flex flex-col">
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
            placeholder="Leave your comment here"
            onBlur={handleError}
            onChange={handleContactFields}
            value={contactData.comment}
          ></textarea>
          <p className="text-[#ff3333] pl-3 text-sm">
            {errorMessage.comment && errorMessage.comment}
          </p>
        </div>
        <button
          onClick={handleSubmitContactForm}
          className="mt-10 w-full bg-orange-600 rounded-md py-2 duration-300 hover:bg-orange-700"
        >
          Submit
        </button>
      </div>
    </section>
  );
};

export default ContactForm;
