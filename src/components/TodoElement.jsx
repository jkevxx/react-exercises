import React from 'react';

const TodoElement = ({ todo, setIsEdit, onDelete }) => {
  return (
    <div className="todoInfo">
      <span>{todo.title}</span>
      <button onClick={() => setIsEdit(true)}>Edit</button>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </div>
  );
};

export default TodoElement;
