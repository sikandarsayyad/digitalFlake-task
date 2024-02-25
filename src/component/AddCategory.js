import React from "react";
import "./AddCategory.css";

export default function AddCategory() {
  // const mydata = CategoryData;

  // const [data, SetData] = React.useState(mydata);

  // function storeInput() {

  //   // Get the input elements
  //   const input1 = document.getElementById("input1");
  //   const input2 = document.getElementById("input2");
  //   const input3 = document.getElementById("input3");

  //   // Get the values of the input elements
  //   const value1 = input1.value;
  //   const value2 = input2.value;
  //   const value3 = input3.value;

  //   const inputArray = {
  //     name: {value1},
  //     description: {value2},
  //     status: {value3},
  //   };
  //   SetData([...mydata,...inputArray]);

  // }

  return (
    <div className="product">
      <div className="producthead">
        <i className="fa-solid fa-arrow-left-long"></i>
        <h2>Add Category</h2>
      </div>
      <form>
        <input type="text" placeholder="Category Name" id="input1" />
        <input type="text" placeholder="Description" id="input2" />
        <input list="status" name="status" placeholder="Status" id="input3" />
        <datalist id="status">
          <option value="Active" />
          <option value="Inactive" />
        </datalist>

        <div className="buttonContainer">
          <button>Cancle</button>
          <button type="button">Save</button>
        </div>
      </form>
    </div>
  );
}
