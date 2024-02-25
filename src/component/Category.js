import React from "react";
import "./Category.css";
import CategoryData from "./CategoryData";
import Category from "../images/category.png";
import { useState } from "react";


export default function CategoryTable(Props) {

  const data = CategoryData;
  const [CategoryArray, SetCategoryArray] = useState(data);

  const handleFilter = (event) => {
    const value = event.target.value.toLowerCase();
    
    if(value){
      const filtered = CategoryArray.filter((user) => user.name.toLowerCase().includes(value));
      SetCategoryArray(filtered);
    }else{
      SetCategoryArray(data);
    }
  };

  const categoryElement = CategoryArray.map((thing) => (
    <tr key={thing.id}>
      <td>{thing.id}</td>
      <td>{thing.name}</td>
      <td>{thing.description}</td>
      <td>{thing.status}</td>
    </tr>
  ));
  console.log(categoryElement);
  return (
    <div className="CategoryTable">
      <div>
        <div className="searchbar">
          <img src={Category} alt="category" />
          <h3>Category</h3>
          <input type="text" placeholder="search" onChange={handleFilter} />
          <button onClick={Props.gotoaddcat}>Add New</button>
        </div>
      </div>
      <table>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Description</th>
          <th>Status</th>
        </tr>
        {categoryElement}
      </table>
      <div></div>
    </div>
  );
}
