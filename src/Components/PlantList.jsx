import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { NavLink } from "react-router";

const PlantList = ({ plant }) => {
  const { plantName, rating, price, description, plantId } = plant;
  return (
    <div>
      <div className="card bg-black pt-5 shadow-sm">
        <figure>
          <img src={plant.image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-white font-bold">{plantName}</h2>
          <p className="text-white font-semibold">{description}</p>
          <div className="flex justify-between">
            <div className="badge badge-outline text-white font-bold">
              <span className="text-white font-bold">
                <BsCurrencyDollar />
              </span>
              {price}
            </div>
            <div className="badge badge-outline text-white font-bold">
              ⭐⭐⭐{rating}
            </div>
          </div>
        </div>

        <NavLink
          to={`/plant-details/${plantId}`}
          className="bg-red-400 btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl"
        >
          <button className=""> View Details</button>
        </NavLink>
      </div>
    </div>
  );
};

export default PlantList;
