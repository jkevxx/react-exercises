import React from "react";

const CrudTableRow = ({ element }) => {
  return (
    <tr>
      <td>{element.name}</td>
      <td>{element.constellation}</td>
      <td>
        <button>Edit</button>
        <button>Delete</button>
      </td>
    </tr>
  );
};

export default CrudTableRow;
