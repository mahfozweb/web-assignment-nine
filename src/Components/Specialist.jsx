import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import photo1 from "../assets/john.jpg";
import photo2 from "../assets/smith.jpg";
import photo3 from "../assets/michel.jpg";
import photo4 from "../assets/saraaa.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
const Specialist = () => {
  const slides = [
    {
      image: photo1,
      name: "John Doe",
      specialization: "Plant Care Specialist",
    },
    {
      image: photo2,
      name: "Jane Smith",
      specialization: "Gardening Expert",
    },
    {
      image: photo3,
      name: "Michael Lee",
      specialization: "Indoor Plant Consultant",
    },
    {
      image: photo4,
      name: "Sara Khan",
      specialization: "Botanical Advisor",
    },
  ];

  return (
    <div className="mt-10">
      <Swiper
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        modules={[Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative flex justify-center items-center">
              {/* Image */}
              <img
                src={slide.image}
                alt={slide.name}
                className="w-full h-[400px] object-cover rounded-xl"
              />

              {/* Overlay with slogan */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-center py-6 rounded-b-xl">
                <h2 className="text-2xl font-semibold">{slide.name}</h2>
                <p className="text-sm mt-2 opacity-90">
                  {slide.specialization}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Specialist;
