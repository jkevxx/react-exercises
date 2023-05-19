import React, { useState } from 'react';
import Todo from './Todo';

import './todoApp.css';

const TodoApp = () => {
  const [title, setTitle] = useState('');
  const [todos, setTodos] = useState([]);

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      id: crypto.randomUUID(),
      title: title,
      completed: false,
    };

    // const temp = [...todos];
    // temp.unshift(newTodo)

    setTodos([...todos, newTodo]);
    setTitle('');
  };

  const handleUpdate = (id, value) => {
    const temp = [...todos];
    const item = temp.find((todo) => todo.id === id);
    item.title = value;
    setTodos(temp);
  };

  const handleDelete = (id) => {
    const temp = todos.filter((todo) => todo.id !== id);
    setTodos(temp);
  };

  return (
    <div className="todoContainer">
      <form onSubmit={handleSubmit} className="todoCreateForm">
        <input
          type="text"
          className="todoInput"
          value={title}
          onChange={handleChange}
          placeholder="write a task"
        />
        <input type="submit" value="create Todo" className="buttonCreate" />
      </form>

      <div className="todosContainer">
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoApp;
