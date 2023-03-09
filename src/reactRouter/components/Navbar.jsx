import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          {/* <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/"
          >
            Home
          </NavLink> */}
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/users">Users</NavLink>
        </li>
      </ul>
    </div>
  );
};
