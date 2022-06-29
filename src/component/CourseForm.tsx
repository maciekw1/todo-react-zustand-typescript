import React, { useState } from "react";
import useCourseStore from "../store";

const CourseForm = () => {
  const { addCourse } = useCourseStore();

  const [courseTitle, setCourseTitle] = useState("");

  console.log(useCourseStore((state) => ({ courses: state.courses })));

  console.log(
    useCourseStore((state) => ({
      id: state.courses.map((course) => {
        return `${course.id} ${course.completed}`;
      }),
    }))
  );

  const handleCourseSubmit = () => {
    if (!courseTitle) return alert("please add a course title");
    const num = Math.ceil(Math.random() * 1000000);
    addCourse(courseTitle, num);
    setCourseTitle("");
  };

  return (
    <div className="form-container">
      <input
        value={courseTitle}
        onChange={(e) => {
          setCourseTitle(e.target.value);
        }}
        className="form-input"
      />
      <button
        onClick={() => {
          handleCourseSubmit();
        }}
        className="form-submit-btn"
      >
        Add Course
      </button>
    </div>
  );
};

export default CourseForm;
