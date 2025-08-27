import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import imgOne from "../assets/inner_01_02.png";
import imgTwo from "../assets/inner_slider_01.jpg";

const Sector12 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2500,
  };

  return (
    <section className="w-full bg-white py-12 px-6 lg:px-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        
        {/* Left Content */}
        <div>
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
            Why Invest in Sector 12, Greater Noida West?
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Sector 12 in Greater Noida West has rapidly become one of the most promising
            real estate destinations in NCR. With excellent connectivity, planned
            infrastructure, and modern lifestyle amenities, it offers an ideal mix of
            affordability and growth potential — making it a hotspot for both end-users
            and investors.
          </p>

          <h3 className="text-xl font-semibold text-gray-700 mb-2">
            Prime Location Advantage
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Located at the heart of Greater Noida West, Sector 12 enjoys seamless
            connectivity to Noida, Ghaziabad, Delhi, and Greater Noida. Its proximity to
            key business hubs, educational institutions, and healthcare centers ensures a
            comfortable lifestyle without compromising on accessibility.
          </p>

          <h3 className="text-xl font-semibold text-gray-700 mb-2">
            Infrastructure & Lifestyle
          </h3>
          <p className="text-gray-600 leading-relaxed">
            With wide roads, upcoming metro connectivity, premium residential projects,
            shopping complexes, and entertainment zones, Sector 12 is developing into a
            self-sustained urban hub. Its strategic growth makes it a future-ready
            location for long-term investment.
          </p>
        </div>

        {/* Right Image Slider */}
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <Slider {...settings}>
            <div>
              <img
                src={imgOne}
                alt="Modern apartments and lifestyle in Sector 12 Greater Noida West"
                className="w-full h-[350px] md:h-[420px] object-cover"
                loading="lazy"
                draggable={false}
              />
            </div>
            <div>
              <img
                src={imgTwo}
                alt="Infrastructure and residential projects in Sector 12"
                className="w-full h-[350px] md:h-[420px] object-cover"
                loading="lazy"
                draggable={false}
              />
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Sector12;
