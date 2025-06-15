import type { FC } from 'react';

interface AboutCard {
  id: number;
  title: string;
  description: string;
  image: string;
}

const AboutContentCard: FC<AboutCard> = ({ id, title, description, image }) => {
  return (
    <article
      className={`flex gap-20 items-center ${
        id === 2 || id === 4 ? 'flex-row-reverse' : ''
      }`}
    >
      <div className="w-1/2 flex flex-col gap-5">
        <h3 className="font-luckiest text-orange-600 text-3xl font-light">
          {title}
        </h3>
        <p>{description}</p>
      </div>
      <div className="w-1/2">
        <img src={image} alt={title} className="w-full rounded-md" />
      </div>
    </article>
  );
};

export default AboutContentCard;
