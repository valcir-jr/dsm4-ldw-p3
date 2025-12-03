import { TaskContext } from "../context/TaskContext";
import { useState, useContext } from "react";
import CategoryList from "./CategoryList";

export default function AddCategory() {
  const { addCategory } = useContext(TaskContext);
  const [currentInput, setCurrentInput] = useState("");

  function handleClick() {
    if (currentInput === "") return;

    addCategory(currentInput);
    setCurrentInput("");
  }

  return (
    <div>
      <p>Adicionar nova categoria</p>

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

      <hr />

      <CategoryList />
    </div>
  );
}
