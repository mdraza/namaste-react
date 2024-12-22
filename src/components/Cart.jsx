import { useDispatch, useSelector } from "react-redux";
import RestaurantItem from "./RestaurantItem";
import { clearCart } from "../../utils/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="p-6 w-6/12 mx-auto">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold mb-8 underline">Cart</h1>
        <button
          className="px-4 py-0 h-12 text-[18px] rounded text-white bg-orange-500"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
      </div>
      {cartItems.length === 0 && (
        <div className="mt-4">
          <h2 className="font-medium text-slate-800 text-2xl mb-1">
            Your cart is empty
          </h2>
          <p className="text-sm">
            You can go to home page to view more restaurants
          </p>
          <Link
            to="/"
            className="px-5 py-3 text-[16px] font-medium rounded text-white bg-orange-500 inline-block mt-6"
          >
            SEE RESTAURANTS NEAR YOU
          </Link>
        </div>
      )}
      {/* {cartItems.map((item) => (
        <p>
          <span className="">{item.card.info.name}</span> -
          <span className="font-medium">
            ₹
            {item?.card?.info?.price
              ? item?.card?.info?.price / 100
              : item?.card?.info?.defaultPrice / 100}
          </span>
        </p>
      ))} */}
      <RestaurantItem item={cartItems} />
    </div>
  );
};

export default Cart;
