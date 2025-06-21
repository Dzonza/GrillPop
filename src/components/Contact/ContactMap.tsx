import burgerFighter from '/images/burger-fighter.png';

const ContactMap = () => {
  return (
    <section className="w-full h-[400px] lg:h-auto lg:w-1/2 relative">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d104995.0163738284!2d135.40363583144813!3d34.67757037551116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e6553406e2e1%3A0xc55bc16ee46a2fe7!2sOsaka%2C%20Japan!5e0!3m2!1sen!2srs!4v1750165407931!5m2!1sen!2srs"
        className="w-full h-full rounded-md outline-[3px] outline-orange-600 outline"
        allowFullScreen={true}
        loading="lazy"
      ></iframe>
      <img
        src={burgerFighter}
        className="hidden lg:block absolute top-0 right-0 w-48 -translate-y-full translate-x-20"
        alt="animated angry burger"
      />
    </section>
  );
};

export default ContactMap;
