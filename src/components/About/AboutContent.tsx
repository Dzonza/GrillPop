import type { FC } from 'react';
import aboutContent from '../../utils/aboutContent';
import AboutContentCard from './AboutContentCard';
const AboutContent: FC = () => {
  return (
    <section className="px-5 sm:px-20 md:px-32 pb-32 lg:pb-40 flex flex-col gap-24 sm:gap-32 items-center max-w-[1400px] mx-auto ">
      {aboutContent.map((card) => {
        return (
          <AboutContentCard
            key={card.id}
            title={card.title}
            description={card.description}
            image={card.image}
            id={card.id}
          />
        );
      })}
    </section>
  );
};

export default AboutContent;
