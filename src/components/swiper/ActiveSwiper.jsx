// ActiveSwiper.jsx
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const ActiveSwiper = ({ cards }) => {
  return (
    <div className="w-full">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={24}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        className="py-6"
      >
        {cards.map((card) => (
          <SwiperSlide key={card.id}>
            <div className="p-4 rounded-xl shadow-md bg-white dark:bg-gray-800 transition hover:scale-[1.02] duration-300">
              <img
                src={card.Image}
                alt={card.ServiceName}
                className="w-full h-52 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-center text-gray-800 dark:text-white">
                {card.ServiceName}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ActiveSwiper;
