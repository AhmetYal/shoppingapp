import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header>
        <Link to="/"> React Shopping Cart</Link>
        <Link to="/admin"> Admin</Link>
      </header>
    </>
  );
};

export default Navbar;
