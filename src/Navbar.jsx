import React from "react";

const Navbar = ({ isLoggedIn }) => {
  if (!isLoggedIn) {
    return null;
  }

  return <div className="navbar">{/* Navbar content */}</div>;
};

export default Navbar;
