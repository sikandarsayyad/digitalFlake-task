import React from "react";
import "./Home.css";
import Logo from "../images/logo.png";

export default function Home() {
  return (
    <div className="home">
      <div>
        <img src={Logo} alt="logo" />
        <h2>
          Digital<span>Flack</span>
        </h2>
        <h3>Welcome to DigitalFlack Admin</h3>
      </div>
    </div>
  );
}
