import { RES_IMG_URL } from "../../utils/constants";

const RestaurantCard = ({ res }) => {
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    areaName,
    locality,
  } = res;

  return (
    <div className="mb-5">
      <div className="w-[347px] h-[280px] rounded-[16px] overflow-hidden relative">
        <img
          className="w-full h-full object-center"
          src={`${RES_IMG_URL}/${cloudinaryImageId}`}
          alt="res-img"
        />
        <div className="image-overlay absolute w-full h-full top-0 flex items-end p-2 text-[25px] font-bold text-white tracking-tighter">
          Items at Rs.275
        </div>
      </div>

      <div className="mt-3">
        <div className="flex justify-between mb-3">
          <h4>{name}</h4>
          <p>{avgRating}⭐</p>
        </div>
        <div className="flex justify-between mb-1">
          <p>{cuisines.join(", ")}</p>
          <p>{costForTwo}</p>
        </div>
        <div className="flex justify-between">
          <p>{areaName}</p>
          <p>{locality}</p>
        </div>
      </div>
    </div>
  );
};

// Higher Order Component
export const withOpenRestaurant = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        <label className="text-white bg-orange-500 py-2 px-4 rounded-lg absolute z-50 text-sm m-2">
          FREE ITEM
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
