import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnLogin, setBtnLogin] = useState("Login");
  const { loggedInUser } = useContext(UserContext);

  const isOnline = useOnlineStatus();

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50 mb-2 ">
      <div className="logo-container">
        <img className="w-56" src={LOGO_URL} alt="logo" />
      </div>

      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online:{isOnline ? "✅" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>

          <li className="px-4"><Link to = "/cart">Cart- {cartItems.length} items</Link></li>
          <li>
            <button
              className="login"
              onClick={() => {
                btnLogin === "Login"
                  ? setBtnLogin("Logout")
                  : setBtnLogin("Login");
              }}
            >
              {btnLogin}
            </button>
          </li>

          {/* <li>{loggedInUser}</li> */}
        </ul>
      </div>
    </div>
  );
};

export default Header;
