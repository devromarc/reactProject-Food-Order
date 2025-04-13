import React from "react";
import logo from "/logo.jpg";

const Header = () => {
  return (
    <div id="main-header">
      <div id="title">
        <img src={logo} alt="food image" />
        <h1>PASABUY</h1>
      </div>
      <nav>
        <button className="text-button">Cart 32</button>
      </nav>
    </div>
  );
};

export default Header;
