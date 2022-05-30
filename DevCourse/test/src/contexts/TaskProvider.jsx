import React, { useCallback, useContext, createContext } from 'react';
import { v4 } from 'uuid';
import useLocalStorage from '../hooks/useLocalStorage';

const TaskContext = createContext();
export const useTasks = () => useContext(TaskContext);

const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useLocalStorage('tasks', []);

  const addTask = useCallback(
    (content) => {
      setTasks([
        ...tasks,
        {
          id: v4(),
          content,
          complete: false,
        },
      ]);
    },
    [tasks, setTasks],
  );

  const updateTask = useCallback(
    (id, complete) => {
      setTasks(
        tasks.map((item) => (item.id === id ? { ...item, complete } : item)),
      );
    },
    [tasks, setTasks],
  );

  const removeTask = useCallback(
    (id) => {
      setTasks(tasks.filter((item) => item.id !== id));
    },
    [tasks, setTasks],
  );

  return (
    <TaskContext.Provider value={{ tasks, addTask, updateTask, removeTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
