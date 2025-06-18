import { Autoplay, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

// Swiper core styles
import "swiper/css";
import "swiper/css/autoplay";

// Reusable Slide Card component
const ServiceSlideCard = ({ card }) => {
  return (
    <div className="group relative flex flex-col justify-end h-full overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
      {/* Background Image */}
      <img
        src={card.Image}
        alt={card.ServiceName}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 p-5 text-white">
        <h3 className="text-2xl font-bold mb-2">{card.ServiceName}</h3>
        <Link
          to={`/details/${card.id}`}
          className="inline-flex items-center font-semibold text-sm text-white opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0"
        >
          View Service
          <ArrowUpRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
};

const ActiveSwiper = ({ cards }) => {
  return (
    <div className="w-full">
      <Swiper
        modules={[Autoplay, A11y]}
        spaceBetween={24}
        slidesPerView={1}
        loop={true}
        grabCursor={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 24 },
          1280: { slidesPerView: 4, spaceBetween: 30 },
        }}
        className="py-6"
      >
        {cards.map((card) => (
          <SwiperSlide key={card.id} style={{ height: "400px" }}>
            <ServiceSlideCard card={card} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ActiveSwiper;
