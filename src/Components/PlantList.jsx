import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { NavLink } from "react-router";

const PlantList = ({ plant }) => {
  const { plantName, rating, price, description, plantId } = plant;
  return (
    <div>
      <div className="card bg-base-100  shadow-sm">
        <figure>
          <img src={plant.image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{plantName}</h2>
          <p>{description}</p>
          <div className="flex justify-between">
            <div className="badge badge-outline">
              <span>
                <BsCurrencyDollar />
              </span>
              {price}
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

export default PlantList;
