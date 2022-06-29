import React from "react";
import useCourseStore from "../store";

const CourseList = () => {
  const { courses, removeCourse, toggleCourseStatus } = useCourseStore(
    (state) => ({
      courses: state.courses,
      removeCourse: state.removeCourse,
      toggleCourseStatus: state.toggleCourseStatus,
    })
  );
  return (
    <>
      <ul>
        {courses.map((course, i) => {
          return (
            <React.Fragment key={i}>
              <li
                className={`course-item`}
                style={
                  {
                    backgroundColor: course.completed ? "#00FF0044" : "white",
                  } as React.CSSProperties
                }
              >
                <span className="course-item-col-1">
                  <input
                    checked={course.completed}
                    type="checkbox"
                    onChange={(e) => {
                      toggleCourseStatus(course.id);
                    }}
                  />
                </span>
                <span
                  style={
                    {
                      color: course.completed ? "#fff" : "#1e1e1e",
                      textDecorationColor: "black",
                      textDecoration: course.completed
                        ? "line-through red"
                        : "none",
                    } as React.CSSProperties
                  }
                >
                  {course?.description}
                </span>
                <button
                  onClick={() => {
                    removeCourse(course.id);
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

export default CourseList;
