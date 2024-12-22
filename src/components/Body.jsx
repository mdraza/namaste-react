import { useEffect, useState } from "react";
import RestaurantCard, { withOpenRestaurant } from "./RestaurantCard";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import useRestaurantCard from "../../utils/useRestaurantCard";

const OpenRestaurantCard = withOpenRestaurant(RestaurantCard);

const Body = () => {
  const [searchText, setSearchText] = useState("");

  const onlineStatus = useOnlineStatus();
  const [restaurant, filteredRestaurant, setFilteredRestaurant] =
    useRestaurantCard();

  function filterRes() {
    const mostRated = restaurant.filter((res) => res.info.avgRating > 4.3);
    setFilteredRestaurant(mostRated);
  }

  const searchFilter = () => {
    const searchFilterd = restaurant.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurant(searchFilterd);
  };

  const searchField = (e) => {
    setSearchText(() => e.target.value);
  };

  if (onlineStatus === false) {
    return (
      <h1 className="text-lg font-light">
        You are looks like Offline!, please check your connection!
      </h1>
    );
  }

  return (
    <div className="body container">
      <div className="flex mb-8 mx-4 justify-between">
        <div className="w-[70%] flex gap-5">
          <input
            type="search"
            className="p-3 border-slate-400 border-solid border-2 rounded w-[100%]"
            value={searchText}
            onChange={searchField}
            placeholder="Type restaurant here..."
          />
          <button
            className="px-8 py-2 rounded text-lg bg-orange-500 text-white"
            onClick={searchFilter}
          >
            Search
          </button>
        </div>
        <div className="flex items-center">
          <button
            className="px-8 py-3 rounded text-lg bg-orange-500 text-white"
            onClick={filterRes}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="m-4 py-4 grid grid-cols-3 gap-10">
        {restaurant.length === 0 ? (
          <ShimmerUI /> // CSS is not applied, that's why Shimmer UI is not visible
        ) : (
          filteredRestaurant?.map((restaurant) => (
            <Link
              to={`/restaurant/${restaurant.info.id}`}
              key={restaurant.info.id}
            >
              {restaurant?.info?.aggregatedDiscountInfoV3?.header ===
              "FREE ITEM" ? (
                <OpenRestaurantCard res={restaurant.info} />
              ) : (
                <RestaurantCard res={restaurant.info} />
              )}
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
