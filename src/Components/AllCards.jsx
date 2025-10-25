import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { NavLink } from "react-router";

const AllCards = ({ plant }) => {
  const { plantName, rating, price, description, plantId } = plant;
  console.log(plant.price);

  return (
    <div>
      <div className="card bg-base-100  shadow-sm">
        <figure>
          <img className="p-5" src={plant.image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{plantName}</h2>
          <p>{description}</p>
          <div className="flex justify-between">
            <div className="badge badge-outline">
              <span>
                <BsCurrencyDollar />
              </span>
              {plant.price}
            </div>
            <div className="badge badge-outline">⭐⭐⭐{rating}</div>
          </div>
        </div>

        <NavLink
          to={`/plant-details/${plantId}`}
          className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl"
        >
          <button> View Details</button>
        </NavLink>
      </div>
    </div>
  );
};

export default AllCards;
