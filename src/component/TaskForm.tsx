import React, { useState } from "react";
import useTasksStore from "../store";

const TaskForm = () => {
  const { addTask: addCourse } = useTasksStore();

  const [taskTitle, setTaskTitle] = useState("");

  //console logs left deliberately for educational purposes
  console.log(useTasksStore((state) => ({ courses: state.tasks })));

  console.log(
    useTasksStore((state) => ({
      id: state.tasks.map((course) => {
        return `${course.id} ${course.completed}`;
      }),
    }))
  );

  const handleSubmit = () => {
    if (!taskTitle) return alert("please add a course title");
    const num = Math.ceil(Math.random() * 1000000);
    addCourse(taskTitle, num);
    setTaskTitle("");
  };

  return (
    <div className="form-container">
      <input
        value={taskTitle}
        onChange={(e) => {
          setTaskTitle(e.target.value);
        }}
        className="form-input"
      />
      <button
        onClick={() => {
          handleSubmit();
        }}
        className="form-submit-btn"
      >
        Add task
      </button>
    </div>
  );
};

export default TaskForm;
