import { useEffect, useState } from "react";
import { RES_API } from "./constants";

const useRestaurantCard = () => {
  const [restaurant, setRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(RES_API);
      const json = await data.json();
      setRestaurant(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredRestaurant(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    };
    fetchData();
  }, []);

  return [restaurant, filteredRestaurant, setFilteredRestaurant];
};

export default useRestaurantCard;
