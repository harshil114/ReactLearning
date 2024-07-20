import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between items-center">
      <div className="logo-container">
        <img className="w-28" src={LOGO_URL} />
      </div>
      <div className="nav-items mr-9">
        <ul className="flex">
          <li className="mr-7 text-lg font-medium">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li className="mr-7 text-lg font-medium">
            <Link to="/">Home</Link>
          </li>
          <li className="mr-7 text-lg font-medium">
            <Link to="/about">About Us</Link>
          </li>
          <li className="mr-7 text-lg font-medium">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="mr-7 text-lg font-medium">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="mr-7 text-lg font-medium">Cart</li>
          <button
            className="login"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
