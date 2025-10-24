import React from "react";
import Hero from "../Components/Hero";
import AllCards from "../Components/AllCards";
import usePlants from "../Hooks/usePlants";
import Tips from "../Components/Tips";

const Home = () => {
  //
  const { cards } = usePlants();
  // console.log(cards);

  return (
    <>
      <div className="bg-gray-400 p-10">
        <div>
          <h1 className="text-3xl font-bold text-amber-500">
            Nurture Nature, Live Fresh
          </h1>
          <p className="text-[15px]">
            Discover a world of vibrant greenery and gentle care. Our plants
            bring peace, freshness, and beauty to every space — making your home
            a living paradise. Slide through nature’s charm with every motion.
          </p>
        </div>
        <Hero></Hero>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {cards.map((plant) => (
          <AllCards plant={plant}></AllCards>
        ))}
      </div>
      <section>
        <Tips></Tips>
      </section>
    </>
  );
};

export default Home;
