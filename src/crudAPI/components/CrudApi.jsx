import React, { useState } from "react";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import "./crudApi.css";

export const CrudApi = () => {
  const [db, setDb] = useState("");
  const [dataToEdit, setDataToEdit] = useState(null);

  const createData = (data) => {
    // console.log(data);
    data.id = Date.now();
    setDb([...db, data]);
  };
  const updateData = (data) => {
    let newData = db.map((element) =>
      element.id === data.id ? data : element
    );
    setDb(newData);
  };
  const deleteData = (id) => {
    let isDelete = window.confirm(`Are you sure to delete this ${id}?`);

    if (isDelete) {
      let newData = db.filter((element) => element.id !== id);
      setDb(newData);
    } else {
      return;
    }
  };

  return (
    <>
      <h1>CRUD App</h1>
      <article className="grid-1-2">
        <CrudForm
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />
        <CrudTable
          data={db}
          setDataToEdit={setDataToEdit}
          deleteData={deleteData}
        />
      </article>
    </>
  );
};
