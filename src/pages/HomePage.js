import React from "react";
import Products from "../components/Products";

const HomePage = () => {
  return (
    <div>
      <div className="content">
        <div className="main">
          <Products />
        </div>
        <div className="sidebar"></div>
      </div>
    </div>
  );
};

export default HomePage;
