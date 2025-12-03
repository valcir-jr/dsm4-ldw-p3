import AddCategory from "./components/AddCategory";
import { TaskProvider } from "./context/TaskContext";
import "./App.css";

function App() {
  return (
    <TaskProvider>
      <div
        style={{
          backgroundColor: "rgba(255, 251, 243, 1)",
          display: "flex",
          flexDirection: "column",
          maxWidth: 500,
          padding: "2rem"
        }}
      >
        <h1>Gerenciador de tarefas por categoria</h1>
        <AddCategory />
      </div>
    </TaskProvider>
  );
}

export default App;
