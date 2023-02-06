import React, { useState } from "react";

const initialForm = {
  name: "",
  constellation: "",
  id: null,
};

const CrudForm = () => {
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleReset = (e) => {};

  return (
    <div>
      <h3>Add</h3>
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
        <input type="reset" />
      </form>
    </div>
  );
};

export default CrudForm;
