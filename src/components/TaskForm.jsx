import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { addTask, editTask } from '../features/tasks/taskSlice';
import { useNavigate, useParams } from 'react-router-dom';

const TaskForm = () => {
  const [task, setTask] = useState({
    title: '',
    description: '',
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const tasks = useSelector((state) => state.tasks);

  const handleChange = (e) => {
    // console.log(e.target.name);
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (params.id) {
      dispatch(editTask(task));
    } else {
      dispatch(
        addTask({
          ...task,
          id: uuid(),
        })
      );
    }
    navigate('/');
  };

  useEffect(() => {
    if (params.id) {
      setTask(tasks.find((task) => task.id === params.id));
    }
  }, [params.id, tasks]);

  return (
    <form onSubmit={handleSubmit} className="bg-gray-900 max-w-sm p-4 mb-1">
      <label htmlFor="title" className="block text-xs font-bold mb-2">
        Tasks:
      </label>
      <input
        type="text"
        name="title"
        id="title"
        placeholder="Title"
        onChange={handleChange}
        value={task.title || ''}
        className="w-full p-2 rounded-md bg-gray-600 mb-2"
      />

      <label htmlFor="description" className="block text-xs font-bold mb-2">
        Description:
      </label>
      <textarea
        name="description"
        id="description"
        placeholder="Description"
        onChange={handleChange}
        value={task.description || ''}
        className="w-full p-2 rounded-md bg-gray-600 mb-2"
      ></textarea>

      <button type="submit" className="bg-indigo-600 px-2 py-1">
        Save
      </button>
    </form>
  );
};

export default TaskForm;
