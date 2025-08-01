import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const HeroBanner = () => {
  return (
    <section className="relative w-full h-[90vh] overflow-hidden">
      {/* Background Image Slider with enhancement */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        pagination={{ clickable: true }}
        navigation={false}
        className="absolute top-0 left-0 w-full h-full z-0"
      >
        {['property1.jpg', 'property6.jpg', 'property3.jpg'].map((src, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-full">
              <img
                src={src}
                alt={`Banner ${index + 1}`}
                className="w-full h-full object-cover brightness-75 scale-100 hover:scale-105 transition-transform duration-[3000ms] ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent z-10"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Overlay Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4 text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
          Experience Luxury Living
        </h1>
        <p className="text-lg md:text-xl mb-6 drop-shadow-md">
          Premium Residences in the Heart of the City
        </p>
        <a
          href="#projects"
          className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-white font-semibold transition-shadow shadow-md hover:shadow-xl"
        >
          Explore Projects
        </a>
      </div>
    </section>
  );
};

export default HeroBanner;
