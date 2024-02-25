import React from "react";
import "./Product.css";
import Product from "../images/product.png";
import ProductData from "./ProductData";
import { useState } from "react";

export default function ProductTable(Props) {
  const data = ProductData;
  const [ProductArray, SetProductArray] = useState(data);

  const handleFilter = (event) => {
    const value = event.target.value.toLowerCase();
    
    if(value){
      const filtered = ProductArray.filter((user) => user.name.toLowerCase().includes(value));
      SetProductArray(filtered);
    }else{
      SetProductArray(data)
    }
  };

  const productThings = ProductArray.map((thing) => (
    <tr key={thing.id}>
      <td>{thing.id}</td>
      <td>{thing.name}</td>
      <td>{thing.packSize}</td>
      <td>{thing.category}</td>
      <td>{thing.MRP}</td>
      <td>{thing.status}</td>
    </tr>
  ));

  const TableHeading = ["Id", "Name", "Pack Size", "Category", "MRP", "Status"];
  const TH = TableHeading.map((head) => <th key={head}>{head}</th>);

  return (
    <div className="CategoryTable">
      <div>
        <div className="searchbar">
          <img src={Product} alt="product" />
          <h3>Product</h3>
          <input type="text" placeholder="search" onChange={handleFilter} />
          <button onClick={Props.gotoaddpro}>Add New</button>
        </div>
      </div>
      <table>
        <tr>{TH}</tr>
        {productThings}
      </table>
      <div></div>
    </div>
  );
}
