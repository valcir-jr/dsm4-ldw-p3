import { TaskContext } from "../context/TaskContext";
import { useContext } from "react";
import AddTask from "./AddTask";

export default function CategoryList() {
  const { category } = useContext(TaskContext);

  return (
    <>
      {category.map((cat, index) => (
        <div key={index}>
          <h3>{cat}</h3>
          <AddTask categoryName={cat} />
          <hr />
        </div>
      ))}
    </>
  );
}
