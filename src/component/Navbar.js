import React from "react";
import "./Navbar.css";
import Home from "../images/home.png";
import Category from "../images/category.png";
import Product from "../images/product.png";

export default function Navbar(Props) {
  return (
    <ul className="navbar">
      <li>
        <p onClick={Props.gotohome}>
          <img src={Home} alt="home" className="navImage" />
          <h4>Home</h4>
          <i class="fa-solid fa-caret-right"></i>
        </p>
      </li>
      <li>
        <p onClick={Props.gotocategory}>
          <img src={Category} alt="category" className="navImage" />
          <h4>Category</h4>
          <i class="fa-solid fa-caret-right"></i>
        </p>
      </li>
      <li>
        <p onClick={Props.gotoproduct}>
          <img src={Product} alt="product" className="navImage" />
          <h4>Product</h4>
          <i class="fa-solid fa-caret-right"></i>
        </p>
      </li>
    </ul>
  );
}
