import { motion, useInView } from 'framer-motion';
import { useRef, type FC } from 'react';
import burgerUser from '/images/burger-user.png';
interface TestimonialDetails {
  name: string;
  description: string;
}

const TestimonialsCard: FC<TestimonialDetails> = ({ name, description }) => {
  const testimonialCardRef = useRef<HTMLElement>(null);
  const isInView = useInView(testimonialCardRef, {
    amount: 0.5,
    once: true,
  });
  return (
    <motion.article
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{
        amount: 0.5,
        once: true,
      }}
      transition={{
        type: 'spring',
        stiffness: 200,
        damping: 15,
      }}
      className={`flex flex-col p-5 sm:p-10 border-[5px] border-orange-600   rounded-[30px]  ${
        isInView && 'animate-shadow'
      } `}
      ref={testimonialCardRef}
    >
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
    </motion.article>
  );
};

export default TestimonialsCard;
