import React, { useEffect, useState } from "react";

const initialForm = {
  name: "",
  constellation: "",
  id: null,
};

const CrudForm = ({ createData, updateData, dataToEdit, setDataToEdit }) => {
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(initialForm);
    }

    // return () => {
    //   second;
    // };
  }, [dataToEdit]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.constellation) {
      alert("data insufficient");
      return;
    }
    if (form.id === null) {
      createData(form);
    } else {
      updateData(form);
    }

    handleReset();
  };
  const handleReset = (e) => {
    setForm(initialForm);
    setDataToEdit(null);
  };

  return (
    <div>
      <h3>{dataToEdit ? "Edit" : "Add"}</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="name"
          value={form.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="constellation"
          placeholder="constellation"
          value={form.constellation}
          onChange={handleChange}
        />
        <input type="submit" value="Send" />
        <input type="reset" value="Clean" onClick={handleReset} />
      </form>
    </div>
  );
};

export default CrudForm;
