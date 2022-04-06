import React from "react";
import Filter from "../components/Filter";
import Products from "../components/Products";

const HomePage = () => {
  return (
    <div>
      <div className="content">
        <div className="main">
          <Filter />
          <Products />
        </div>
        <div className="sidebar"></div>
      </div>
    </div>
  );
};

export default HomePage;
