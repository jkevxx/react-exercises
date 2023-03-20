import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

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
          <NavLink to="/landing">Landing</NavLink>
        </li>
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/analytics">Analytics</NavLink>
        </li>
        <li>
          <NavLink to="/admin">Admin</NavLink>
        </li>
      </ul>
    </div>
  );
};
