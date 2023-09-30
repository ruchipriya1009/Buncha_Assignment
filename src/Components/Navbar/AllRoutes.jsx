import React from "react";
import { Routes, Route } from "react-router-dom";
import Cartpage from "../Products/Cart/Cartpage";
import Home from "../../Home";
const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/cart" element={<Cartpage />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
