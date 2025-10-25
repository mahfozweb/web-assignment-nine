import React from "react";
import PlantList from "../Components/PlantList";
import usePlants from "../Hooks/usePlants";

const PlantsAll = () => {
  const { cards, loading } = usePlants();
  return (
    <div>
      <h1 className="font-bold text-3xl p-10">All plants here</h1>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {cards.map((plant) => (
            <PlantList plant={plant}></PlantList>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlantsAll;
