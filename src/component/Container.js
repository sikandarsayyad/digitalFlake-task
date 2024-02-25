import React from "react";
import "./Container.css";
import Home from "./Home";
import Category from "./Category";
import Product from "./Product";
import Navbar from "./Navbar";
import AddCategory from "./AddCategory";
import AddProduct from "./AddProduct";

export default function Container() {
  const [Page, SetPage] = React.useState(<Home />);

  const gotoHome = () => SetPage(<Home />);
  const gotoCategory = () =>(
   SetPage(<Category gotoaddcat={gotoAddCat} />)
   
   );
  const gotoAddCat = () => SetPage(<AddCategory />);
  const gotoProduct = () => SetPage(<Product gotoaddpro={gotoAddPro} />);
  const gotoAddPro = () => SetPage(<AddProduct />);

  console.log(Page);
  return (
    <div className="container">
      <Navbar
        gotohome={gotoHome}
        gotocategory={gotoCategory}
        gotoproduct={gotoProduct}
      />
      {Page}
      
    </div>
  );
}
