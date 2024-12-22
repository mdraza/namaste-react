import { useDispatch, useSelector } from "react-redux";
import { RES_IMG_URL } from "../../utils/constants";
import { addItem } from "../../utils/cartSlice";

const RestaurantItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleAddItem = (items) => {
    dispatch(addItem(items));
  };

  return (
    <div>
      {item?.map((card) => (
        <div
          key={card?.card?.info?.id}
          className=" bg-white border-b-2 mb-8 pb-8 mt-2 border-slate-300 flex justify-between gap-12"
        >
          <div>
            <h3 className="font-medium text-lg">{card?.card?.info?.name}</h3>
            <p className="font-medium mb-2">
              ₹
              {card?.card?.info?.price
                ? card?.card?.info?.price / 100
                : card?.card?.info?.defaultPrice / 100}
            </p>
            <p>
              ⭐
              {card?.card?.info?.ratings?.aggregatedRating.rating
                ? card?.card?.info?.ratings?.aggregatedRating?.rating
                : "3.4"}
              (
              {card?.card?.info?.ratings?.aggregatedRating?.ratingCountV2
                ? card?.card?.info?.ratings?.aggregatedRating?.ratingCountV2
                : 3}
              )
            </p>
            <p className="text-slate-600 mt-2">
              {card?.card?.info?.description}
            </p>
          </div>
          <div className="w-[130px] h-[130px] relative flex justify-center">
            <img
              className="w-full h-full object-center rounded-lg"
              src={`${RES_IMG_URL}/${card?.card?.info?.imageId}`}
              alt="Menu"
            />
            <button
              className="px-8 py-2 text-green-600 rounded font-medium bg-white shadow -bottom-4 absolute"
              onClick={() => handleAddItem(card)}
            >
              ADD
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RestaurantItem;
