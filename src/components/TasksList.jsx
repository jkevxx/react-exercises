import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask } from '../features/tasks/taskSlice';
import { Link } from 'react-router-dom';

const TasksList = () => {
  const tasks = useSelector((state) => state.tasks);
  // console.log(tasks);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    // console.log(id);
    dispatch(deleteTask(id));
  };

  return (
    <div className="w-4/6">
      <header className="flex justify-between items-center py-4">
        <h1>Tasks {tasks.length} </h1>
        <Link
          to="/create-task"
          className="bg-indigo-600 px-2 py-1 rounded-sm text-sm"
        >
          Create Task
        </Link>
      </header>
      <div className="grid grid-cols-2 gap-4">
        {tasks.map((task) => (
          <div key={task.id} className="bg-gray-700 p-4 rounded-md">
            <header className="flex justify-between">
              <h3>{task.title}</h3>
              <div className="flex gap-x-2">
                <Link
                  to={`/edit-task/${task.id}`}
                  className="bg-gray-600 px-2 py-1 text-xs rounded-md"
                >
                  Update
                </Link>
                <button
                  onClick={() => handleDelete(task.id)}
                  className="bg-red-500 px-2 py-1 text-xs rounded-md self-center"
                >
                  Delete
                </button>
              </div>
            </header>
            <p>{task.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TasksList;
