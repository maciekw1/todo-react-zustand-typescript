import React from "react";
import useTasksStore from "../store";

const TasksList = () => {
  const { tasks, removeTask, toggleTaskStatus } = useTasksStore((state) => ({
    tasks: state.tasks,
    removeTask: state.removeTask,
    toggleTaskStatus: state.toggleTaskStatus,
  }));
  return (
    <>
      <ul>
        {tasks.map((task, i) => {
          return (
            <React.Fragment key={i}>
              <li
                className={`task-item`}
                style={
                  {
                    backgroundColor: task.completed ? "#51f75187" : "white",
                  } as React.CSSProperties
                }
              >
                <span className="task-item-col-1">
                  <input
                    checked={task.completed}
                    type="checkbox"
                    onChange={() => {
                      toggleTaskStatus(task.id);
                    }}
                  />
                </span>
                <span
                  className="task-description"
                  style={
                    {
                      color: task.completed ? "#fff" : "#1e1e1e",
                      textDecorationColor: "black",
                      textDecoration: task.completed
                        ? "line-through red"
                        : "none",
                    } as React.CSSProperties
                  }
                >
                  {task?.description}
                </span>
                <button
                  onClick={() => {
                    removeTask(task.id);
                  }}
                  className="delete-btn"
                >
                  Delete
                </button>
              </li>
            </React.Fragment>
          );
        })}
      </ul>
    </>
  );
};

export default TasksList;
