import { Helmet } from "react-helmet-async";
import { FaQuoteLeft } from "react-icons/fa";

// Reusable Card Component
const ReviewCard = ({ name, role, photo, review }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="center-center"
      className="max-w-sm w-full mx-auto bg-white border border-gray-200 rounded-2xl shadow-lg p-6 flex flex-col items-center transition hover:shadow-xl duration-300"
    >
      <img
        src={photo}
        alt={name}
        className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
      />
      <div className="text-center mt-4">
        <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
      <FaQuoteLeft className="text-green-400 text-3xl mt-4" />
      <p className="text-gray-600 mt-2 px-4 text-center text-sm leading-relaxed">
        {review}
      </p>
    </div>
  );
};

const Review = () => {
  return (
    <div className="w-full px-4 py-10 bg-gradient-to-b from-[#f8fafc] to-[#eef3f7] min-h-screen">
      <Helmet>
        <title>Career | Reviews</title>
      </Helmet>

      <div
        data-aos="fade-up"
        data-aos-anchor-placement="center-center"
        className="mb-10 text-center space-y-2"
      >
        <p className="text-base font-medium text-green-500 tracking-wider uppercase">
          Our
        </p>
        <h1 className="text-4xl font-bold text-gray-800">
          User <span className="text-green-500">Reviews</span>
        </h1>
      </div>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        <ReviewCard
          name="Frances Wagner"
          role="Member"
          photo="https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=2071"
          review="The career website offers a user-friendly interface with comprehensive resources for job seekers. The search functionality is intuitive, facilitating easy access to relevant job listings and career advice. Overall, it is a valuable tool for anyone looking to advance their professional journey."
        />
        <ReviewCard
          name="Becky Lance"
          role="Member"
          photo="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887"
          review="Fantastic platform! The interface is clean and straightforward. I appreciate the personalized recommendations and additional resources like webinars and courses. It's clear this site understands job seekers' needs. I've already recommended it!"
        />
        <ReviewCard
          name="Harry"
          role="Member"
          photo="https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?q=80&w=2070"
          review="This platform exceeded my expectations! Beyond job listings, the advice and resume tips were invaluable. The search filters are a time-saver. I found roles I’d never considered and landed my dream job within two months!"
        />
      </div>
    </div>
  );
};

export default Review;
