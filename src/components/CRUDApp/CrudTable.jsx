import React from "react";
import CrudTableRow from "./CrudTableRow";

const CrudTable = ({ data }) => {
  return (
    <div>
      <h3>Table data</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Constellation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan="3">No Data</td>
            </tr>
          ) : (
            data.map((el) => <CrudTableRow key={el.id} element={el} />)
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CrudTable;
