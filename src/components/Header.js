import { useState } from "react";

const Header = () => {
  const [loginbtn, setLoginbtn] = useState("Login");
  const logincheck = () => {
    loginbtn === "Login" ? setLoginbtn("Logout") : setLoginbtn("Login");
  };
  return (
    <div className="container">
      <img
        className="logo"
        alt="res-img"
        src="https://images.pexels.com/photos/1833349/pexels-photo-1833349.jpeg?auto=compress&cs=tinysrgb&w=600"
      ></img>

      <div className="links">
        <li>Home</li>
        <li>About</li>
        <li>Card</li>
        <button onClick={logincheck}>{loginbtn}</button>
      </div>
    </div>
  );
};
export default Header;
