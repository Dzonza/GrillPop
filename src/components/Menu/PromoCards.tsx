import promoCardText from '../../utils/promoCards';

const PromoCards = () => {
  return (
    <section className="flex flex-wrap px-5 sm:px-20 py-32 md:py-52 justify-center content-center gap-10 ">
      {promoCardText.map((card) => {
        return (
          <article
            className="w-[300px] p-5 flex flex-col gap-2 border-2 border-pink-600/30  rounded-xl promo-card-shadow"
            key={card.id}
          >
            <div className="flex gap-3 items-center">
              <img src={card.image} alt={card.title} className="w-12" />
              <h3 className="font-luckiest text-orange-600 font-light tracking-wide">
                {card.title}
              </h3>
            </div>
            <div>
              <p className="font-bold ">{card.firstText}</p>
              <p className="opacity-80 ">{card.secondText}</p>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default PromoCards;
