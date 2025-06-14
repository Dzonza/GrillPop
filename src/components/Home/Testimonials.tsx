import TestimonialsCard from './TestimonialsCard';
import testimonialsTitle from '/images/testimonials-title.png';
const userTestimonials = [
  {
    id: 1,
    name: 'Emily T.',
    description:
      '“I ordered the classic Grillpop burger and fries, and wow — the burger was juicy, perfectly seasoned, and the bun was super soft. The fries were crispy and not too salty, just how I like them. Honestly, it felt like gourmet fast food!”',
  },
  {
    id: 2,
    name: 'James R.',
    description:
      '“The Double Pop combo never disappoints. Every bite is packed with flavor, and the portion sizes are generous. I really appreciate how everything arrives hot and fresh — even the delivery packaging keeps it all intact and crispy.”',
  },
  {
    id: 3,
    name: 'Priya M.',
    description:
      '“I tried the Spicy Veggie Wrap and it blew me away. So many places overlook vegetarian options, but this wrap had real texture, bold spices, and fresh toppings. I’d definitely come back just for that!”',
  },
  {
    id: 4,
    name: 'Leo G.',
    description:
      '“The chicken poppers were unreal — crispy on the outside, tender on the inside, and the house dip? 🔥 I’m officially addicted. Also love the quirky names on the menu — makes the whole experience more fun!”',
  },
];

const Testimonials = () => {
  return (
    <section className="py-32">
      <img
        src={testimonialsTitle}
        alt="testimonials title"
        className="mx-auto"
      />
      <section className="p-20 grid grid-cols-[repeat(2,500px)] gap-14 justify-center">
        {userTestimonials.map((testimonial) => (
          <TestimonialsCard
            key={testimonial.id}
            name={testimonial.name}
            description={testimonial.description}
          />
        ))}
      </section>
    </section>
  );
};

export default Testimonials;
