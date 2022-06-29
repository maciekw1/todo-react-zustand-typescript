import "./App.css";
import TaskForm from "./component/TaskForm";
import TasksList from "./component/TasksList";

function App() {
  return (
    <div className="main-container">
      <h1
        style={{
          fontSize: "3rem",
          margin: "0 0 2rem 0",
        }}
      >
        Your TO-DO list
      </h1>
      <TaskForm />
      <TasksList />
    </div>
  );
}

export default App;
