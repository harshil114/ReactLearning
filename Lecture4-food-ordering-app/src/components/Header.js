import logo from "../assets/logo.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between items-center shadow-xl p-7">
      <div className="logo-container">
        <img className="h-9 w-56 object-fill" src={logo} />
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
          {/* <button
            className="login p-2 bg-[#41d4d8] rounded-lg hover:bg-[#4adfe4] font-medium active:bg-[#41d4d8]"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button> */}
        </ul>
      </div>
    </div>
  );
};

export default Header;
