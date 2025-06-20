import type { FC } from 'react';
import burgerUser from '/images/burger-user.png';

interface TestimonialDetails {
  name: string;
  description: string;
}

const TestimonialsCard: FC<TestimonialDetails> = ({ name, description }) => {
  return (
    <article className="flex flex-col p-5 sm:p-10 border-[5px] border-orange-600  rounded-[30px] testimonial-card-shadow ">
      <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-5 mb-2 sm:mb-0">
        <img
          src={burgerUser}
          alt="user profile image"
          className="w-20 sm:w-28"
        />
        <h2 className="text-orange-600 font-luckiest text-4xl font-normal">
          {name}
        </h2>
      </div>
      <p>{description}</p>
    </article>
  );
};

export default TestimonialsCard;
