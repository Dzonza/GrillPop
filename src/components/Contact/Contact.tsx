import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import ContactForm from './ContactForm';
import ContactMap from './ContactMap';
import sushiSamurai from '/images/sushi-samurai.png';
const Contact = () => {
  return (
    <section className="max-w-[1600px] mx-auto">
      <Header />
      <div className="pt-32 md:pt-40 px-5 sm:px-20 md:px-40 pb-32 md:pb-40">
        <h2 className="font-luckiest text-center text-7xl font-light text-orange-600">
          Contact Us
        </h2>
        <div className="flex flex-col items-center justify-center text-justify sm:text-center gap-3 mx-auto w-full lg:w-3/4 my-10 relative">
          <p className="text-xl">
            We’re always hungry for feedback — just like you are for great food!
            Whether you have a complaint, a suggestion for improvement, or just
            want to share some kind words, we’re all ears. At GrillPop, we value
            every customer’s opinion and are committed to making your experience
            better every day.
          </p>
          <p className="text-xl">
            Have something to say? Fill out the form below and our team will get
            back to you as soon as possible.
          </p>
          <p className="text-xl">
            Let’s keep the flavor and the service top-notch — together!
          </p>
          <img
            src={sushiSamurai}
            alt="animated sushi samurai"
            className="hidden lg:block absolute left-0 top-0 -translate-y-full w-36"
          />
        </div>
        <div className="flex flex-col-reverse lg:flex-row gap-10 sm:gap-16 md:gap-20">
          <ContactForm />
          <ContactMap />
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Contact;
