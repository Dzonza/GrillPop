import { motion } from 'framer-motion';
import type { FC } from 'react';
import useResize from '../../customHooks/useResize';
interface AboutCard {
  id: number;
  title: string;
  description: string;
  image: string;
}

const AboutContentCard: FC<AboutCard> = ({ id, title, description, image }) => {
  const { width } = useResize();
  return (
    <article
      className={`flex flex-col md:flex-row gap-10 sm:gap-16 md:gap-20 items-center ${
        id === 2 || id === 4 ? 'md:flex-row-reverse' : ''
      } ${width < 768 ? 'flex-col-reverse' : ''}`}
    >
      <div className="w-full md:w-1/2 flex flex-col gap-5">
        <motion.h3
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ amount: 0.5, once: true }}
          transition={{
            duration: 0.5,
            ease: 'easeInOut',
          }}
          className="font-luckiest text-orange-600 text-3xl font-light"
        >
          {title}
        </motion.h3>
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ amount: 0.5, once: true }}
          transition={{
            duration: 0.5,
            ease: 'easeInOut',
            delay: 0.2,
          }}
        >
          {description}
        </motion.p>
      </div>
      <div className="w-full md:w-1/2">
        <motion.img
          initial={{ boxShadow: 'none' }}
          whileInView={{ boxShadow: 'rgba(240, 46, 170, 0.4) 15px 15px' }}
          src={image}
          alt={title}
          transition={{
            type: 'spring',
            stiffness: 50,
            damping: 6,
          }}
          className="w-full rounded-md"
          viewport={{ once: true, amount: 1 }}
        />
      </div>
    </article>
  );
};

export default AboutContentCard;
