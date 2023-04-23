export default function appReducer(state, action) {
  // console.log(action);

  switch (action.type) {
    case 'add_task':
      return {
        tasks: [...state.tasks, action.payload],
      };

    case 'delete_task':
      // console.log(action.payload);
      return {
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };

    case 'update_task':
      const updatedTask = action.payload;
      const updatedTasks = state.tasks.map((task) => {
        if (task.id === updatedTask.id) {
          task.title = updatedTask.title;
          task.description = updatedTask.description;
        }
        return task;
      });
      return {
        tasks: updatedTasks,
      };

    case 'toggle_task_done':
      const idStatus = action.payload;
      const updatedStatusTasks = state.tasks.map((task) =>
        task.id === idStatus ? { ...task, done: !task.done } : task
      );
      return {
        tasks: updatedStatusTasks,
      };

    default:
      return state;
  }
}
