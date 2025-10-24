import axios from "axios";
import { useEffect, useState } from "react";

const usePlants = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    setLoading(true);
    axios
      .get("/plants.json")
      .then((data) => {
        setCards(data.data);
        setLoading(false);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return { cards, loading, error };
};
export default usePlants;
