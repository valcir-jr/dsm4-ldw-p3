import React, { createContext, useState } from "react";

type Task = { desc: string; category: string };
type Tasks = Task[];
type Categories = string[];

interface TaskContextType {
  addTask: (desc: string, category: string) => void;
  addCategory: (newCategory: string) => void;
  task: Tasks;
  category: Categories;
}

export const TaskContext = createContext<TaskContextType>({
  addTask: () => {},
  addCategory: () => {},
  task: [],
  category: [],
});

export const TaskProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [task, setTask] = useState<Tasks>([]);
  const [category, setCategory] = useState<Categories>([]);

  function addCategory(newCategory: string) {
    setCategory([...category, newCategory]);
  }

  function addTask(desc: string, categoryName: string) {
    setTask([...task, { desc, category: categoryName }]);
  }

  return (
    <TaskContext.Provider value={{ addCategory, addTask, task, category }}>
      {children}
    </TaskContext.Provider>
  );
};
