import RestaurantItem from "./RestaurantItem";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const RestaurantCategory = ({ data, showItem, setShowIndex }) => {
  const handleItem = () => {
    setShowIndex();
  };
  return (
    <div className="my-5 rounded border-b-8 border-slate-200">
      {/* Accordion Header */}
      <div
        className="flex justify-between mb-5 cursor-pointer"
        onClick={handleItem}
      >
        <h2 className="text-xl font-bold">
          {data.title} ({data.itemCards.length})
        </h2>
        <span className="text-2xl font-bold">
          {showItem ? <IoIosArrowDown /> : <IoIosArrowUp />}
        </span>
      </div>
      {/* Accordion body */}
      <div className="pb-4">
        {showItem && <RestaurantItem item={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
