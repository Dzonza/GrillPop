import type { FC } from 'react';
import AboutContentCard from './AboutContentCard';
import joinUs from '/images/join-us.jpg';
import commitment from '/images/our-commitment.jpg';
import ourStory from '/images/our-story.jpg';
import team from '/images/our-team.jpg';
const AboutContent: FC = () => {
  const aboutContent = [
    {
      id: 1,
      title: 'Our Story',
      description:
        'Founded with a simple mission: to bring joy through food, Grillpop has quickly grown from a humble food truck to a bustling restaurant known for its delicious burgers, pizzas, Asian specialties, and decadent desserts. Every item on our menu is crafted with care using the freshest ingredients, ensuring each bite is a burst of flavor.',
      image: ourStory,
    },
    {
      id: 2,
      title: 'Our Commitment',
      description:
        "Quality is at the heart of everything we do. From our signature dishes to our customer service, we strive for excellence. Whether you're grabbing a quick lunch or treating yourself to a family dinner, we promise an experience that leaves you wanting more.",
      image: commitment,
    },
    {
      id: 3,
      title: 'Our Team',
      description:
        "Meet the faces behind Grillpop! Our team is dedicated to creating a welcoming atmosphere where food lovers of all kinds can gather to enjoy great meals and create lasting memories. We're not just a restaurant; we're a community.",
      image: team,
    },
    {
      id: 4,
      title: 'Join Us',
      description:
        "Come visit us at Grillpop and taste the difference. Whether you're a first-time visitor or a regular, we look forward to serving you and sharing our love for delicious, fast food done right.",
      image: joinUs,
    },
  ];
  return (
    <section className="px-32 pb-40 flex flex-col gap-32 items-center w-[1400px] mx-auto ">
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
