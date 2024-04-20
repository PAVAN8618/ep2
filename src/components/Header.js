import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  const status = useOnlineStatus();
  const [loginbtn, setLoginbtn] = useState("Login");
  const logincheck = () => {
    loginbtn === "Login" ? setLoginbtn("Logout") : setLoginbtn("Login");
  };

  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="flex justify-between bg-emerald-900 items-center text-white ">
      <Link to={"/"}>
        <img
          className="w-10 h-10 rounded-full m-4"
          alt="res-img"
          src="https://images.pexels.com/photos/1833349/pexels-photo-1833349.jpeg?auto=compress&cs=tinysrgb&w=600"
        ></img>
      </Link>

      <div className="flex mx-5 list-none space-x-4">
        <li>{status === false ? "❌" : "✅"}</li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/cart">Cart -{cartItems.length}items</Link>
        </li>
        <button onClick={logincheck}>{loginbtn}</button>
      </div>
    </div>
  );
};
export default Header;
