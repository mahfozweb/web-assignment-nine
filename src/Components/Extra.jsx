import React from "react";
import { BiDollar } from "react-icons/bi";

const Extra = () => {
  return (
    <div className=" bg-[#1C1C1C] mt-10 px-5 md:px-10">
      <div className="py-20 ">
        <h1 className="font-bold flex justify-center text-5xl text-fuchsia-600 ">
          Plant of the Week{" "}
        </h1>
        <h1 className="text-white font-bold text-2xl py-10">
          Bleeding heart (Dicentra)
        </h1>
        <p className="pt-5 text-fuchsia-300">
          The small red and white flowers of the bleeding heart, dangling like a
          row of pendants from gracefully arching branches, lend themselves to
          romance and are a lovely addition to a spring garden. Bleeding hearts
          are native to Siberia and East Asia, and are grown worldwide in
          temperate zones. Their beauty derives from the unique heart shape of
          their charming blooms.
        </p>
        <marquee className="bg-green-100 text-green-800 font-semibold py-2">
          <p>
            🌿 Welcome to GreenLeaf Store — Plant of the Week: Peace Lily 🌸🌿
            Plant of the Week: Discover Nature’s Star!
          </p>
        </marquee>
      </div>
      <div className="first-card md:flex p-1  md:p-5 gap-5">
        <div className="left pb-2 md:pb-0  md:max-w-[50%] h-full">
          <img
            className=" h-full rounded-[10px]"
            src="https://images.contentstack.io/v3/assets/bltcedd8dbd5891265b/blt4a4af7e6facea579/6668df6ceca9a600983250ac/beautiful-flowers-hero.jpg?q=70&width=828&auto=webp"
            alt=""
          />
        </div>
        <div>
          <div className="right flex gap-20 ">
            <div>
              <h1 className="font-bold text-white text-3xl">
                <span>⭐⭐⭐</span>
                <span>5.0</span>
              </h1>
            </div>
            <div className="text-white text-3xl font-bold">
              <h1 className="flex justify-start items-center">
                <BiDollar></BiDollar>
                <span>300</span>
              </h1>
            </div>
          </div>
          <div>
            <button className="text-white bg-red-500 font bold text-4xl btn mt-10 md:mt-30 py-6 mb-5 md:mb-0">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Extra;
