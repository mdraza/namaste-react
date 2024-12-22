import { useContext, useState } from "react";
import { LOGO_URL } from "../../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import UserContext from "../../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [login, setLogin] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const { logedUser, setUserName } = useContext(UserContext);

  function UserLogin() {
    return login === "Login" ? setLogin("Logout") : setLogin("Login");
  }

  // Subscribed the store
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="px-4 shadow mb-8">
      <div className="container h-[80px] flex justify-between">
        <div className="w-[150px] flex items-center">
          <img className="logo" src={LOGO_URL} alt="logo" />
        </div>

        <div className="flex items-center">
          <ul className="flex gap-4 text-lg">
            <li>Online status:{onlineStatus ? "🟢" : "🔴"}</li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/grocery">Grocery</Link>
            </li>
            <li className="font-bold text-xl">
              <Link to="/cart">Cart ({cartItems.length} items)</Link>
            </li>
            {/* <li>
              <input
                className="border p-2"
                value={logedUser}
                onChange={(e) => setUserName(e.target.value)}
              />
            </li> */}
            {/* <li className="text-2xl font-bold">{logedUser}</li> */}
            <div className="loginTxt">
              <button
                className={login === "Login" ? "login" : "logout"}
                onClick={UserLogin}
              >
                {login}
              </button>
              <div
                className="online-status"
                style={
                  onlineStatus
                    ? { backgroundColor: "green" }
                    : { backgroundColor: "red" }
                }
              ></div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
