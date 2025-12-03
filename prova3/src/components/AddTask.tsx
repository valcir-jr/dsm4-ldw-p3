import { TaskContext } from "../context/TaskContext";
import { useState, useContext } from "react";
import TaskList from "./TaskList";

export default function AddTask({ categoryName }: { categoryName: string }) {
  const { addTask } = useContext(TaskContext);
  const [currentInput, setCurrentInput] = useState("");

  function handleClick() {
    if (currentInput === "") return;

    addTask(currentInput, categoryName);
    setCurrentInput("");
  }

  return (
    <div>
      <p>Adicionar tarefa</p>

      <input
        type="text"
        value={currentInput}
        onChange={(e) => setCurrentInput(e.target.value)}
        style={{ marginRight: 5, padding: 5, marginBottom: 10 }}
      />

      <button
        onClick={handleClick}
        style={{
          padding: 5,
          backgroundColor: "white",
          borderColor: "rgba(204, 204, 204, 1)",
        }}
      >
        Adicionar
      </button>

      <TaskList categoryName={categoryName} />
    </div>
  );
}
