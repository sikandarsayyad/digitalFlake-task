import React from "react";
import "./AddProduct.css";

export default function AddProduct() {
  return (
    <div className="product">
      <div className="producthead">
        <i className="fa-solid fa-arrow-left-long"></i>
        <h3>Add Product</h3>
      </div>
      <div>
        <input list="Category" name="Category" placeholder="Category" />
        <datalist id="Category">
          <option value="Milk" />
          <option value="Friuts" />
        </datalist>
        <input type="text" placeholder="Product Name"></input>
        <input type="text" placeholder="Pack Size"></input>
        <br />
        <input type="number" placeholder="MRP"></input>
        <label for="file-input">Product Image</label>
        <input type="file" placeholder="Product Image" accept="image/*"></input>
        <input list="status" placeholder="Status" id="file-input" />
        <datalist id="status">
          <option value="Active" />
          <option value="Inactive" />
        </datalist>
      </div>
      <div className="buttonContainer">
        <button>Cancle</button>
        <button>Save</button>
      </div>
    </div>
  );
}
