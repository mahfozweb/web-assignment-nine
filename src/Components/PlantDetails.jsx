import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router";
import usePlants from "../Hooks/usePlants";
import Details from "./Details";

const PlantDetails = () => {
  const { id } = useParams();
  const { cards } = usePlants();
  const [addcard, setCard] = useState([]);
  useEffect(() => {
    const filterData = cards.filter((plant) => plant.plantId == id);
    setCard(filterData);
  }, [cards, id]);

  return (
    <>
      {addcard.map((plant) => (
        <Details key={plant.plantId} plant={plant}></Details>
      ))}
    </>
  );
};

export default PlantDetails;
