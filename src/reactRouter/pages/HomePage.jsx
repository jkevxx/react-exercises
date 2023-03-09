import React from "react";
import { Link } from "react-router-dom";

const userId = "Keitaro";

export const HomePage = () => {
  return (
    <div>
      <h2>Application</h2>
      <Link to={`/users/${userId}`}>Users</Link>
    </div>
  );
};
