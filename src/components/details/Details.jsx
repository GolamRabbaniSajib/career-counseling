import { Link, useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FaStar, FaRegClock, FaTags } from "react-icons/fa";
import CommentBox from "../../commentBox/CommentBox";

const Details = () => {
  const singleData = useLoaderData();
  const { ServiceName, Image, Category, Description, Pricing, Duration, Counselor, Rating } = singleData;

  return (
    <div className="my-6 w-11/12 mx-auto">
      <Helmet>
        <title>Career | Details - {ServiceName}</title>
      </Helmet>

      <div className="hero min-h-screen my-6 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg shadow-lg">
        <div className="hero-content flex-col md:grid md:grid-cols-2 md:space-x-8 p-8">
          <div data-aos="fade-right">
            <img
              src={Image}
              alt={`Image of ${ServiceName}`}
              className="rounded-lg shadow-2xl object-cover w-full h-full md:w-[80%] lg:w-[90%]"
            />
          </div>
          <div data-aos="fade-left">
            <h1 className="text-4xl font-bold mb-4">{ServiceName}</h1>
            <p className="text-lg mb-4">{Description}</p>

            <h2 className="text-2xl font-semibold mb-2">{Counselor}</h2>

            <div className="py-4 grid grid-cols-2 gap-x-3 text-xl">
              <p className="flex items-center font-semibold">
                <FaTags className="mr-2" />
                Category:
              </p>
              <p>{Category}</p>
            </div>

            <div className="grid grid-cols-2 gap-x-3 text-xl mb-4">
              <p className="flex items-center font-semibold">
                <FaRegClock className="mr-2" />
                Duration:
              </p>
              <p>{Duration}</p>
            </div>

            <div className="py-4 grid grid-cols-2 gap-x-3 text-xl">
              <p className="flex items-center font-semibold">
                <FaStar className="mr-2 text-yellow-400" />
                Rating:
              </p>
              <p>{Rating}</p>
            </div>

            <div className="grid grid-cols-2 gap-x-3 text-xl mb-4">
              <p className="font-semibold">Price:</p>
              <p>{Pricing}</p>
            </div>

            <div className="py-6">
              <Link to="/" className="btn btn-neutral text-white font-semibold">
                Go Back To Home Page
              </Link>
            </div>
          </div>
        </div>
      </div>

      <hr className="my-6" />
      
      <div className="mt-4" data-aos="flip-up">
        <CommentBox />
      </div>
    </div>
  );
};

export default Details;
