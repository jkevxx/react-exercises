import React from "react";
import { useParams } from "react-router-dom";

export const UserPage = () => {
  // const params = useParams();
  const { id } = useParams();

  return (
    <div>
      User <b>{id}</b>
    </div>
  );
};
