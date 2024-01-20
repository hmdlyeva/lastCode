import React from "react";
import "./hero.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";
const Hero = () => {
  return (
    <section id="hero">
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="hero">
            <div className="container">
              <div className="my">
                <h1>Book a table for yourself at a time convenient for you</h1>
                <button>Book a table</button>
              </div>
            </div>
          </div>
        </SwiperSlide>



        <SwiperSlide>
          <div className="hero2">
            <div className="container">
              <div className="my">
                <h1>Tasty & Delicious Food</h1>
                <button>Book a table</button>
              </div>
            </div>
          </div>
        </SwiperSlide>


      </Swiper>
    </section>
  );
};

export default Hero;
