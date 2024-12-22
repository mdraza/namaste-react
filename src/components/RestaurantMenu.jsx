import { useState } from "react";
import ShimmerUI from "./ShimmerUI";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(0);

  if (resInfo === null) return <ShimmerUI />;
  const {
    name,
    avgRating,
    totalRatings,
    costForTwoMessage,
    cuisines,
    areaName,
    sla: { slaString },
  } = resInfo?.cards[2]?.card?.card?.info;
  // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const category =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (catg) =>
        catg?.card?.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="card-container">
      <div className="my-12">
        <h2 className="text-slate-900 font-bold text-2xl mb-5">{name}</h2>
        <div className="border border-slate-300 p-4 rounded-md shadow-md">
          <div className="font-bold flex items-center gap-1">
            <span>⭐</span>
            <span>
              {avgRating} ({totalRatings} ratings) . {costForTwoMessage}
            </span>
          </div>
          <p className="text-red-500 text-sm mb-4">
            <strong>{cuisines}</strong>
          </p>
          <p className="mb-1">
            <strong>Outlet</strong> - {areaName}
          </p>
          <p>
            <strong>Delivery time</strong> - {slaString.toLowerCase()}
          </p>
        </div>
      </div>
      <div className="my-10">
        {category?.map((catg, index) => (
          <RestaurantCategory
            key={catg.card.card.title}
            data={catg?.card?.card}
            showItem={index === showIndex}
            setShowIndex={() =>
              setShowIndex(index === showIndex ? null : index)
            }
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
