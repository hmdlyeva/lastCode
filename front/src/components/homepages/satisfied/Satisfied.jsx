import React from "react";
import "./satisfied.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";

const Satisfied = () => {
  return (
    <section id="satisfied">
      <div className="satisfied">
        <div className="container">
          <div className="my">
            <h1>Our Satisfied Guests says</h1>
            <div className="cards">
              <Swiper
                // slidesPerView={3}
                // spaceBetween={30}
                loop={true}
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  400: {
                    slidesPerView: 1,
                    spaceBetween: 30,
                  },
                  900: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                  },
                  1200: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                  },
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="card">
                    <div className="image"></div>
                    <div className="stars">
                      <FontAwesomeIcon
                        icon={faStar}
                        style={{ color: "#FFD43B" }}
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        style={{ color: "#FFD43B" }}
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        style={{ color: "#FFD43B" }}
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        style={{ color: "#FFD43B" }}
                      />
                      <FontAwesomeIcon
                        icon={faStarHalfStroke}
                        style={{ color: "#FFD43B" }}
                      />
                    </div>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                    <div className="footer">
                      <p className="font">Dennis Green</p>
                      <p>Guests from Italy</p>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="card">
                    <div className="image"></div>
                    <div className="stars">
                      <FontAwesomeIcon
                        icon={faStar}
                        style={{ color: "#FFD43B" }}
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        style={{ color: "#FFD43B" }}
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        style={{ color: "#FFD43B" }}
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        style={{ color: "#FFD43B" }}
                      />
                      <FontAwesomeIcon
                        icon={faStarHalfStroke}
                        style={{ color: "#FFD43B" }}
                      />
                    </div>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                    <div className="footer">
                      <p className="font">Dennis Green</p>
                      <p>Guests from Italy</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card">
                    <div className="image"></div>
                    <div className="stars">
                      <FontAwesomeIcon
                        icon={faStar}
                        style={{ color: "#FFD43B" }}
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        style={{ color: "#FFD43B" }}
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        style={{ color: "#FFD43B" }}
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        style={{ color: "#FFD43B" }}
                      />
                      <FontAwesomeIcon
                        icon={faStarHalfStroke}
                        style={{ color: "#FFD43B" }}
                      />
                    </div>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                    <div className="footer">
                      <p className="font">Dennis Green</p>
                      <p>Guests from Italy</p>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="card">
                    <div className="image"></div>
                    <div className="stars">
                      <FontAwesomeIcon
                        icon={faStar}
                        style={{ color: "#FFD43B" }}
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        style={{ color: "#FFD43B" }}
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        style={{ color: "#FFD43B" }}
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        style={{ color: "#FFD43B" }}
                      />
                      <FontAwesomeIcon
                        icon={faStarHalfStroke}
                        style={{ color: "#FFD43B" }}
                      />
                    </div>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                    <div className="footer">
                      <p className="font">Dennis Green</p>
                      <p>Guests from Italy</p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Satisfied;
