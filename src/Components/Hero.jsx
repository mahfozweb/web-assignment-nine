import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import photo1 from "../assets/green tree.jpg";
import photo2 from "../assets/indoor.jpg";
import photo3 from "../assets/leaf.jpg";
import photo4 from "../assets/tropical.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
const Hero = () => {
  const slides = [
    {
      id: 1,
      image: photo1,
      title: "Fresh Green Life",
      slogan: "Bring nature closer to your home.",
    },
    {
      id: 2,
      image: photo2,
      title: "Healthy Indoor Plants",
      slogan: "Purify your air with living beauty.",
    },
    {
      id: 3,
      image: photo3,
      title: "Tropical Delight",
      slogan: "Experience the lush vibes of nature.",
    },
    {
      id: 4,
      image: photo4,
      title: "Bloom with Care",
      slogan: "Nurture a greener tomorrow.",
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
                alt={slide.title}
                className="w-full h-[400px] object-cover rounded-xl"
              />

              {/* Overlay with slogan */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-center py-6 rounded-b-xl">
                <h2 className="text-2xl font-semibold">{slide.title}</h2>
                <p className="text-sm mt-2 opacity-90">{slide.slogan}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
