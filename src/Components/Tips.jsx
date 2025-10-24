import React from "react";

const Tips = () => {
  return (
    <>
      <div className="main bg-[#E3F2FD] pt-10">
        <div className="pb-20">
          <h1 className="font-bold text-5xl text-fuchsia-600">
            Plant Care Tips{" "}
          </h1>
          <p className="pt-5 text-gray-500">
            Provide plants with proper sunlight, water, and nutrients. Use
            well-drained soil, prune and clean leaves regularly, protect from
            pests, repot when needed, and ensure good airflow for healthy and
            long-lasting growth.
          </p>
        </div>
        <div className="tips">
          <h1 className="text-start p-5 font-bold text-2xl ">watering</h1>
          <div className="first-card md:flex p-5 gap-5">
            <div className="left  max-w-[50%] h-full">
              <img
                className=" h-full rounded-[10px]"
                src="https://media.istockphoto.com/id/1367890204/photo/gardening-in-backyard.jpg?s=2048x2048&w=is&k=20&c=2XzBWjBYWJBsizvX0PRe8rxrmA_ZPju3ubVIUcrW41I="
                alt=""
              />
            </div>
            <div className="right ">
              <div>
                <h1 className="font-bold text-xl">Check the Soil First</h1>
                <p className="text-[15px] text-justify p-2">
                  Before watering, touch the soil — if the top 1–2 inches feel
                  dry, it’s time to water. <br />
                  👉Overwatering is a common mistake!
                </p>
              </div>
              <div>
                <h1 className="font-bold text-xl">
                  Water Deeply, Not Frequently
                </h1>
                <p className="text-[15px] text-justify p-2">
                  Instead of watering a little every day, give a deep soak less
                  often. This helps roots grow deeper and stronger.
                </p>
              </div>
              <div>
                <h1 className="font-bold text-xl">Water in the Morning</h1>
                <p className="text-[15px] text-justify p-2">
                  Morning watering allows moisture to reach roots before the sun
                  gets hot. Avoid watering in the evening — it can cause fungus
                  or root rot.
                </p>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-start p-5 font-bold text-2xl ">Sunlight</h1>
            <div className="second-card md:flex gap-6   ">
              <div className="left  max-w-[50%] h-full">
                <img
                  className=" h-full rounded-[10px]"
                  src="https://media.istockphoto.com/id/476116580/photo/sycamore-tree-in-summer-field-at-sunset-england-uk.jpg?s=2048x2048&w=is&k=20&c=co7qivS58-PbkvfmwfYS9Zt8f3Qma2LiiNTv292f_KU="
                  alt=""
                />
              </div>
              <div className="right ">
                <div>
                  <h1 className="font-bold text-xl">
                    Know Your Plant’s Light Needs
                  </h1>
                  <p className="text-[15px] text-justify p-2">
                    <span>👉</span>Full Sun: 6–8 hours/day (e.g., succulents,
                    cactus) Partial <br />
                    <span>👉</span>Sun/Shade: 3–5 hours/day (e.g., Aloe Vera){" "}
                    <br /> <span>👉</span>Low Light: Indirect light (e.g., Snake
                    Plant, Peace Lily)
                  </p>
                </div>
                <div>
                  <h1 className="font-bold text-xl">
                    Place Plants Strategically
                  </h1>
                  <p className="text-[15px] text-justify p-2">
                    <span>👉</span>South-facing windows → most sunlight <br />
                    <span>👉</span>East/West-facing → moderate sunlight <br />
                    <span>👉</span>North-facing → low light
                  </p>
                </div>
                <div>
                  <h1 className="font-bold text-xl">
                    Avoid Direct Harsh Sunlight
                  </h1>
                  <p className="text-[15px] text-justify p-2">
                    <span>👉</span>Some indoor plants can get scorched in direct
                    afternoon sun. <br />
                    <span>👉</span> Use sheer curtains to filter light if
                    needed.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-start p-5 font-bold text-2xl ">Fertilizing </h1>
            <div className="third-card md:flex gap-10  ">
              <div className="left  max-w-[50%] h-full">
                <img
                  className=" h-full rounded-[10px]"
                  src="https://media.istockphoto.com/id/606230424/photo/agriculture.jpg?s=2048x2048&w=is&k=20&c=4-ItPY7mYI7xMQPeaOXGH1F9HbHhgue071UUijutPVg="
                  alt=""
                />
              </div>
              <div className="right ">
                <div>
                  <h1 className="font-bold text-xl">
                    Know Your Plant’s Light Needs
                  </h1>
                  <p className="text-[15px] text-justify p-2">
                    <span>👉</span>Full Sun: 6–8 hours/day (e.g., succulents,
                    cactus) Partial <br />
                    <span>👉</span>Sun/Shade: 3–5 hours/day (e.g., Aloe Vera){" "}
                    <br /> <span>👉</span>Low Light: Indirect light (e.g., Snake
                    Plant, Peace Lily)
                  </p>
                </div>
                <div>
                  <h1 className="font-bold text-xl">
                    Place Plants Strategically
                  </h1>
                  <p className="text-[15px] text-justify p-2">
                    <span>👉</span>South-facing windows → most sunlight <br />
                    <span>👉</span>East/West-facing → moderate sunlight <br />
                    <span>👉</span>North-facing → low light
                  </p>
                </div>
                <div>
                  <h1 className="font-bold text-xl">
                    Avoid Direct Harsh Sunlight
                  </h1>
                  <p className="text-[15px] text-justify p-2">
                    <span>👉</span>Some indoor plants can get scorched in direct
                    afternoon sun. <br />
                    <span>👉</span> Use sheer curtains to filter light if
                    needed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tips;
