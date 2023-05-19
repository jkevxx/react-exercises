import React from 'react';

const TodoElement = ({ todo, setIsEdit, onDelete }) => {
  return (
    <div className="todoInfo">
      <span className="todoTitle">{todo.title}</span>
      <button className="button" onClick={() => setIsEdit(true)}>
        Edit
      </button>
      <button className="buttonDelete" onClick={() => onDelete(todo.id)}>
        Delete
      </button>
    </div>
  );
};

export default TodoElement;
