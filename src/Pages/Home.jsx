import React, { use } from "react";
import Hero from "../Components/Hero";
import AllCards from "../Components/AllCards";
import usePlants from "../Hooks/usePlants";
import Tips from "../Components/Tips";
import Specialist from "../Components/Specialist";
import { AuthContext } from "../Provider/AuthProvider";

const Home = () => {
  const { cards, loading } = usePlants();
  // console.log(cards);

  let marqueeRef = null;

  const handleMouseOver = () => {
    marqueeRef.stop();
  };

  const handleMouseOut = () => {
    marqueeRef.start();
  };
  return (
    <>
      <div className="bg-gray-400 p-10">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-5xl font-bold text-indigo-800">
            Nurture Nature, Live Fresh
          </h1>
          <div className="pt-10 overflow-hidden">
            <marquee
              behavior="scroll"
              direction="left"
              ref={(el) => (marqueeRef = el)}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              loop="true"
              className="bg-green-100 text-green-800 font-semibold py-2 animate-marquee "
            >
              🌿 Welcome to Green Nest Store — Plant of the Week: Peace Lily
              🌸.. 🌿 Discover a world of vibrant greenery and gentle care. Our
              plants🌸 .. 🌿bring peace, freshness, and beauty to every space —
              making your home🌸.. 🌿a living paradise. Slide through nature’s
              charm with every motion.🌸
            </marquee>
          </div>
        </div>
        <Hero></Hero>
      </div>
      {loading && <span className="loading loading-dots loading-xl"></span>}
      <div className="bg-black p-10 grid grid-cols-1 md:grid-cols-3 gap-3 pt-10">
        {cards.map((plant) => (
          <AllCards plant={plant}></AllCards>
        ))}
      </div>
      <section>
        <Tips></Tips>
      </section>
      <div>
        <h1 className="bg-gray-400 py-10 p-5 md:p-10 font-bold text-7xl text-indigo-800">
          Meet Our Green Experts
        </h1>
        <p className="text-gray-800 text-xl p-5 md:p-10">
          Our passionate plant care experts are here to help your greens thrive.
          From indoor plants to tropical beauties, they bring years of
          experience and love for nature — guiding you toward a healthier,
          greener lifestyle
        </p>
        <Specialist></Specialist>
      </div>
    </>
  );
};

export default Home;
