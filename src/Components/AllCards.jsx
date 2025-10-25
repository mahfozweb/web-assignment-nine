import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { NavLink } from "react-router";

const AllCards = ({ plant }) => {
  const { plantName, rating, price, description, plantId } = plant;
  console.log(plant.price);

  return (
    <div>
      <div className="card bg-black shadow-blue-50 border-5  shadow-sm">
        <figure>
          <img className="p-5" src={plant.image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-white font-bold">{plantName}</h2>
          <p className="text-white font-semibold">{description}</p>
          <div className="flex justify-between">
            <div className="badge badge-outline text-white font-bold">
              <span>
                <BsCurrencyDollar />
              </span>
              {plant.price}
            </div>
            <div className="badge badge-outline text-white font-bold">
              ⭐⭐⭐{rating}
            </div>
          </div>
        </div>

        <NavLink
          to={`/plant-details/${plantId}`}
          className=" bg-red-400 btn   btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl"
        >
          <button> View Details</button>
        </NavLink>
      </div>
    </div>
  );
};

export default AllCards;
