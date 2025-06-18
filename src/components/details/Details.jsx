import { Link, useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FaStar, FaRegClock, FaTags, FaArrowLeft } from "react-icons/fa";
import CommentBox from "../../commentBox/CommentBox";
import React from "react";

const DetailItem = React.memo(({ icon, label, value }) => (
  <div className="flex items-start space-x-3">
    <div className="flex-shrink-0">{icon}</div>
    <div>
      <p className="font-semibold text-gray-300">{label}</p>
      <p className="text-white">{value}</p>
    </div>
  </div>
));

const Details = () => {
  const singleData = useLoaderData();
  const {
    ServiceName,
    Image,
    Category,
    Description,
    Pricing,
    Duration,
    Counselor,
    Rating,
  } = singleData;

  return (
    <div className="my-8 md:my-12 w-11/12 mx-auto">
      <Helmet>
        <title>Career | Details - {ServiceName}</title>
      </Helmet>

      <div className="bg-gradient-to-br from-gray-900 to-indigo-900 text-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="p-8 md:p-12 order-2 lg:order-1 flex flex-col justify-center" data-aos="fade-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">{ServiceName}</h1>
            <p className="text-lg text-gray-300 mb-6">{Description}</p>

            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-3">About the Counselor</h2>
              <p className="text-xl text-indigo-300">{Counselor}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-lg mb-8">
              <DetailItem
                icon={<FaTags className="text-indigo-400 mt-1" />}
                label="Category"
                value={Category}
              />
              <DetailItem
                icon={<FaRegClock className="text-indigo-400 mt-1" />}
                label="Duration"
                value={Duration}
              />
              <DetailItem
                icon={<FaStar className="text-yellow-400 mt-1" />}
                label="Rating"
                value={Rating}
              />
              <div>
                <p className="font-semibold text-gray-300">Price:</p>
                <p className="text-white text-xl font-bold">{Pricing}</p>
              </div>
            </div>

            <div className="mt-auto pt-6">
              <Link
                to="/"
                className="inline-flex items-center btn btn-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-transform transform hover:scale-105"
              >
                <FaArrowLeft className="mr-3" />
                Back to Home
              </Link>
            </div>
          </div>

          <div className="order-1 lg:order-2" data-aos="zoom-in">
            <img
              src={Image}
              alt={`Image of ${ServiceName}`}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="my-12">
        <hr className="border-gray-700" />
      </div>

      <div data-aos="fade-up" data-aos-offset="200">
        <CommentBox />
      </div>
    </div>
  );
};

export default Details;