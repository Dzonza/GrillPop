import type { FC } from 'react';
import burgerUser from '/images/burger-user.png';

interface TestimonialDetails {
  name: string;
  description: string;
}

const TestimonialsCard: FC<TestimonialDetails> = ({ name, description }) => {
  return (
    <article className="flex  flex-col p-10 border-[5px] border-orange-600  rounded-[30px] testimonial-card-shadow ">
      <div className="flex items-center gap-5">
        <img src={burgerUser} alt="user profile image" className="w-28" />
        <h2 className="text-orange-600 font-luckiest text-4xl font-normal">
          {name}
        </h2>
      </div>
      <p>{description}</p>
    </article>
  );
};

export default TestimonialsCard;
