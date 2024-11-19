import { Link, useLoaderData } from "react-router-dom";
import Card from "../components/card/Card";
import Coaching from "../components/coaching/Coaching";
import ActiveSwiper from "../components/swiper/ActiveSwiper";
import Instructors from "../components/instructors/Instructors";


const Home = () => {
    const cards = useLoaderData();
    
  return (
    <div>
      
        <section className="bg-black">
            <Coaching></Coaching>
        </section>
      <section className="w-11/12 mx-auto py-6">
        <div className="my-5">
          <h1 className="text-4xl font-semibold text-center py-6">Our Services Image</h1>
        </div>
          <ActiveSwiper cards={cards}></ActiveSwiper>
      </section>
      <section data-aos="fade-up" className="w-11/12 mx-auto my-8">
        <div className="*:text-center space-y-3 my-6">
          <h1 className="text-4xl font-semibold">Our Best Services</h1>
          <p>Are you ready to take the next step in your professional journey? Our tailored career counseling services provide you with the guidance and insights you need to achieve your goals. Whether you’re navigating a career change, seeking advancement, or exploring new opportunities, our experienced counselors will help you identify your strengths, refine your resume, and enhance your interview skills.</p>
        </div>
        <div className="my-6 grid gap-4 lg:grid-cols-3 md:grid-cols-2">
            {
                cards.map(card => <Card key={card.id} card={card}></Card>)
            }
        </div>
      </section>
      <section className="my-10">
        <Instructors></Instructors>
      </section>
    </div>
  );
};

export default Home;
