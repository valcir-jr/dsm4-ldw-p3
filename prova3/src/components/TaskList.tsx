import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export default function TaskList({ categoryName }: { categoryName: string }) {
  const { task } = useContext(TaskContext);

  return (
    <>
      {task
        .filter((t) => t.category === categoryName)
        .map((item, index) => (
          <div key={index} style={{display: "flex"}}>
            <input type="checkbox" style={{marginRight: 10}}/>
            <p>{item.desc}</p>
          </div>
        ))}
    </>
  );
}
