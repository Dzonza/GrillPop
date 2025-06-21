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
        <h3 className="font-luckiest text-orange-600 text-3xl font-light">
          {title}
        </h3>
        <p>{description}</p>
      </div>
      <div className="w-full md:w-1/2">
        <img src={image} alt={title} className="w-full rounded-md" />
      </div>
    </article>
  );
};

export default AboutContentCard;
