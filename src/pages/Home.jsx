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

      {/* Hero / Swiper Section */}
      <section className="w-11/12 max-w-7xl mx-auto py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Our Services
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Discover what we offer to support your career journey.
          </p>
        </div>
        <ActiveSwiper cards={cards} />
      </section>

      {/* Services Grid */}
      <section
        data-aos="fade-up"
        className="w-11/12 max-w-7xl mx-auto py-16"
      >
        <div className="text-center space-y-5">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800">
            Our Best Services
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
            Ready to take the next step in your professional journey? Our
            tailored career counseling services guide you through every stage — from
            resume refinement to interview prep and growth strategies. Let's reach
            your potential.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </div>
      </section>

      {/* Coaching Section */}
      <section className="bg-gray-950 text-white py-16">
        <div className="w-11/12 max-w-7xl mx-auto">
          <Coaching />
        </div>
      </section>

      {/* Instructors Section */}
      <section className="py-16 bg-white">
        <div className="w-11/12 max-w-7xl mx-auto">
          <Instructors />
        </div>
      </section>
    </div>
  );
};

export default Home;
