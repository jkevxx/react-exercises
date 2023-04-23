import { createContext, useReducer } from 'react';
import appReducer from './AppReducer';
import { v4 } from 'uuid';

const initialState = {
  tasks: [],
};

export const GlobalContext = createContext(initialState);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const addTask = (task) => {
    dispatch({ type: 'add_task', payload: { ...task, id: v4(), done: false } });
  };

  const deleteTask = (id) => {
    dispatch({ type: 'delete_task', payload: id });
  };

  const updateTask = (task) => {
    dispatch({ type: 'update_task', payload: task });
  };

  const toggleTaskDone = (id) => {
    dispatch({ type: 'toggle_task_done', payload: id });
  };

  return (
    <GlobalContext.Provider
      value={{ ...state, addTask, deleteTask, updateTask, toggleTaskDone }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
