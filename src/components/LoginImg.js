import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css/bundle";

const slider = [
  {
    id: 1,
    image: "images/login-img.png",
  },
  {
    id: 2,
    image: "images/login-img.png",
  },
  {
    id: 3,
    image: "images/login-img.png",
  },
];
const LoginImg = () => {
  return (
    <>
      <section className="login__img">
        <div className="txt">
          <h1>
            Welcome to the <br /> <span>Easy</span> Software
          </h1>
        </div>

        <div className="slider-img">
          <Swiper
            className="mySwiper"
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
          >
            {slider.map((props) => {
              const { id, image } = props;
              return (
                <SwiperSlide
                  key={id}
                  className="swiper-slide"
                >
                  <img src={image} alt="image" />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default LoginImg;
