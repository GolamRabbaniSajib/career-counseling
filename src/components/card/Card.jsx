import { NavLink } from "react-router-dom";
import { FaArrowRight, FaTag, FaUserTie, FaLayerGroup } from "react-icons/fa";
import { useState } from "react";

const Card = ({ card }) => {
  const { id, Image, ServiceName, Category, Counselor, Pricing } = card;
  const [loading, setLoading] = useState(true);

  return (
    <div
      data-aos="flip-left"
      className="group rounded-2xl overflow-hidden shadow-md bg-white border border-gray-200 transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
    >
      {/* Image Section */}
      <figure className="h-52 overflow-hidden relative bg-gray-100">
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-10 h-10 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
        <img
          src={Image}
          alt={ServiceName}
          loading="lazy"
          decoding="async"
          className={`w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105 ${
            loading ? "opacity-0" : "opacity-100"
          }`}
          onLoad={() => setLoading(false)}
        />
      </figure>

      {/* Content Section */}
      <div className="p-4 sm:p-5 space-y-3">
        <h2 className="text-lg font-semibold text-gray-800 group-hover:text-purple-600 transition-colors">
          {ServiceName}
        </h2>

        <p className="text-sm text-gray-500 font-medium flex items-center gap-2">
          <FaUserTie className="text-purple-500" /> {Counselor}
        </p>

        <div className="flex justify-between text-sm font-medium text-gray-600">
          <span className="flex items-center gap-1">
            <FaLayerGroup className="text-gray-400" />
            Category:
          </span>
          <span className="text-gray-800">{Category}</span>
        </div>

        <div className="text-green-600 font-bold text-lg flex items-center gap-2">
          <FaTag className="text-green-500" /> {Pricing}
        </div>

        <NavLink to={`/details/${id}`} className="block pt-2">
          <button className="w-full flex items-center justify-center gap-2 bg-purple-600 text-white hover:bg-purple-700 font-semibold py-2 px-4 rounded-lg transition duration-200">
            Learn More <FaArrowRight className="text-sm" />
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Card;
