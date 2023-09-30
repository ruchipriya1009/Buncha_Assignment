import React from "react";
import "./App.css";
import Products from "./Components/Products/Products";
import Sidebar from "./Components/Sidebar/Sidebar";
const Home = () => {
  return (
    <div>
      <div className="content-container">
        <Sidebar />
        <Products />
      </div>
      <hr />
    </div>
  );
};

export default Home;
