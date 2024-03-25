import React from "react";
import logo from "../assets/logo-white.png";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faDoorOpen } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ signOut }) => {
  return (
    <>
      <div className="bg-navbar-bg h-full grid grid-cols-1 grid-rows-6 p-12">
        <NavLink to="/dashboard-home">
          <div className="grid row-span-1 gap-0 grid-cols-3 grid-rows-1 items-center justify-items-center h-20">
            <div className="col-span-1 row-span-1 w-28 grid items-center">
              <img src={logo} alt="logo" />
            </div>
            <div className="col-span-1 row-span-1 h-full bg-white w-0.5 rounded" />
            <div className="col-span-1 row-span-1 w-full h-full grid items-center">
              <h1 className="font-mono text-xl text-white">Agaahi</h1>
            </div>
          </div>
        </NavLink>
        <div className="row-span-1 grid items-center">
          <NavLink
            to="/dashboard-home"
            className={({ isActive }) =>
              isActive
                ? "underline font-serif text-xl text-white text-left"
                : "font-serif text-xl text-white text-left"
            }
          >
            Home
          </NavLink>
        </div>

        <div className="row-span-1 grid items-center">
          <NavLink
            to="/dashboard-analytics"
            className={({ isActive }) =>
              isActive
                ? "underline font-serif text-xl text-white text-left"
                : "font-serif text-xl text-white text-left"
            }
          >
            Analytics
          </NavLink>
        </div>

        <div className="row-span-1 grid items-center">
          <NavLink
            to="/dashboard-map"
            className={({ isActive }) =>
              isActive
                ? "underline font-serif text-xl text-white text-left"
                : "font-serif text-xl text-white text-left"
            }
          >
            Map
          </NavLink>
        </div>

        <div className="row-span-1 grid items-center justify-items-center">
          <NavLink to="/settings">
            <FontAwesomeIcon
              icon={faGear}
              size="2xl"
              style={{ color: "#ffffff" }}
            />
          </NavLink>
        </div>
        <button
          className="row-span-1 grid grid-cols-1 items-center justify-items-center bg-transparent border-none cursor-pointer"
          onClick={signOut}
          aria-label="Log out"
        >
          <FontAwesomeIcon
            icon={faDoorOpen}
            size="2xl"
            style={{ color: "#ffffff" }}
          />
        </button>
      </div>
    </>
  );
};

export default Navbar;
