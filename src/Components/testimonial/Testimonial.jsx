import React from "react";
import "./Testimonial.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";

import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";

const data = [
  {
    avatar: AVTR1,
    name: "Faith Snow",
    review: "Awesome, i must testify that you are good at what you do.",
  },
  {
    avatar: AVTR2,
    name: "Chris Brown",
    review: "Awesome, i must testify that you are good at what you do.",
  },
  {
    avatar: AVTR3,
    name: "David Alen",
    review: "I must testify that you are good at what you do.",
  },
  {
    avatar: AVTR4,
    name: "Fatima",
    review: "Awesome, i must testify that you are good at what you do.",
  },
];
const Testimonial = () => {
  return (
    <section id="testimonials">
      <h5>Review from client</h5>
      <h2>Testimonial</h2>

      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={5}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonial;
