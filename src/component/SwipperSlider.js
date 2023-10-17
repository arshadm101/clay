import React, { useEffect } from 'react';
import Swiper from 'swiper';
// import 'swiper/swiper';

const SwiperSlider = () => {
  useEffect(() => {
    // Initialize Swiper when the component mounts
    const mySwiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      loop: true, // Set to true if you want a looping slider
      // Add other Swiper options as needed
    });

    return () => {
      // Destroy Swiper when the component unmounts
      mySwiper.destroy(true, true);
    };
  }, []);

  return (
    <div className="swiper-container">
      <div className="swiper-wrapper">
        <div className="swiper-slide">
         1
        </div>
        <div className="swiper-slide">
         2
        </div>
        <div className="swiper-slide">
         3
        </div>
        {/* Add more slides as needed */}
      </div>
    </div>
  );
};

export default SwiperSlider;
