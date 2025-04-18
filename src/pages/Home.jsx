import { Link, useLoaderData } from "react-router-dom";
import Card from "../components/card/Card";
import Coaching from "../components/coaching/Coaching";
import ActiveSwiper from "../components/swiper/ActiveSwiper";
import Instructors from "../components/instructors/Instructors";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const cards = useLoaderData();

  return (
    <div>
      <Helmet>
        <title>Career | Home</title>
      </Helmet>

      <section className="w-11/12 max-w-7xl mx-auto py-10">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 ">
            Our Services
          </h1>
          <p className="mt-2 text-gray-600 ">
            Discover what we offer to support your career journey.
          </p>
        </div>
        <ActiveSwiper cards={cards} />
      </section>
      <section data-aos="fade-up" className="w-11/12 max-w-7xl mx-auto my-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            Our Best Services
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto text-base md:text-lg">
            Ready to take the next step in your professional journey? Our
            tailored career counseling services guide you through every stage —
            from resume refinement to interview prep and growth strategies.
            Let's reach your potential.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </div>
      </section>

      <section className="bg-black">
        <Coaching></Coaching>
      </section>
      <section className="my-10">
        <Instructors></Instructors>
      </section>
    </div>
  );
};

export default Home;
