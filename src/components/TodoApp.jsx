import React, { useState } from 'react';

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

  return (
    <div className="todoContainer">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="todoInput"
          value={title}
          onChange={handleChange}
        />
        <input type="submit" value="create Todo" className="buttonCreate" />
      </form>

      <div className="todosContainer">
        {todos.map((todo) => (
          <div key={todo.id}>{todo.title}</div>
        ))}
      </div>
    </div>
  );
};

export default TodoApp;
