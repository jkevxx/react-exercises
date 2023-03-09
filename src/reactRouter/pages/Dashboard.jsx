import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

export const Dashboard = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <button onClick={handleClick}>Log out</button>

      <Link to="welcome">Say Welcome</Link>
      <Outlet />
    </div>
  );
};
