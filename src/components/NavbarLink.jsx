import React from "react";
import { NavLink } from "react-router-dom";

const NavbarLink = ({ to, text }) => {
  return (
    <>
      <div className="row-span-1 grid items-center">
        <NavLink
          to={to}
          className={({ isActive }) =>
            isActive
              ? "underline font-serif text-xl text-white text-left"
              : "font-serif text-xl text-white text-left"
          }
        >
          {text}
        </NavLink>
      </div>
    </>
  );
};

export default NavbarLink;
