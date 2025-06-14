import { useEffect, useRef, useState } from 'react';
import saladImg from '/images/salad.png';
import tomatoImg from '/images/tomatoe-slice.png';
const SloganHero = () => {
  const [rotation, setRotation] = useState(0);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!headingRef.current) return;

      const rect = headingRef.current.getBoundingClientRect();
      const centerY = window.innerHeight / 2;
      const distanceFromCenter = rect.top + rect.height / 2 - centerY;

      const maxDistance = window.innerHeight / 2;
      const ratio = Math.max(-1, Math.min(1, distanceFromCenter / maxDistance));

      const newRotation = ratio * 45;
      setRotation(newRotation);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative overflow-hidden">
      <h1
        ref={headingRef}
        className="overflow-hidden text-orange-600 text-7xl/normal font-semibold font-luckiest p-[250px_160px] text-center  relative before:h1-before"
        style={{ '--rotation': `${rotation}deg` } as React.CSSProperties}
      >
        "Where Every Bite Hits Right — Packed with Flavor, Served with Speed."
      </h1>
      <img
        src={tomatoImg}
        alt="image of lettuce salad"
        className="absolute bottom-0 w-[20%] -translate-x-1/2"
      />
      <img
        src={saladImg}
        alt="image of salad"
        className="absolute w-[20%] top-0 right-0 -rotate-90 translate-x-1/2"
      />
    </section>
  );
};

export default SloganHero;
