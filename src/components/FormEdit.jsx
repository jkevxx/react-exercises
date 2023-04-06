import React, { useState } from 'react';

const FormEdit = ({ todo, onUpdate, setIsEdit }) => {
  const [newValue, setNewValue] = useState(todo.title);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(todo.id, newValue);
    setIsEdit(false);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setNewValue(value);
  };

  return (
    <form className="todoUpdateForm" onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} value={newValue || ''} />
      <button>Update</button>
    </form>
  );
};

export default FormEdit;
