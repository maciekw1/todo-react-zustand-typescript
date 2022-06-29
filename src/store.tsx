import create from "zustand";

//persist stores state in local storage
import { devtools, persist } from "zustand/middleware";

interface Todo {
  id: number;
  description: string;
  completed: boolean;
}

interface TodoState {
  courses: Todo[];
  addCourse: (description: string, id: number) => void;
  removeCourse: (id: number) => void;
  toggleCourseStatus: (id: number) => void;
}

const useCourseStore = create<TodoState>()(
  devtools(
    //persist second argument is the name in localstorage
    persist(
      (set) => ({
        courses: [],
        addCourse: (description: string, id: number) => {
          set((state) => ({
            courses: [{ id, description, completed: false }, ...state.courses],
          }));
        },
        removeCourse: (id: number) => {
          set((state) => ({
            courses: state.courses.filter((c) => c.id !== id),
          }));
        },
        toggleCourseStatus: (id: number) => {
          set((state) => ({
            courses: state.courses.map((course) =>
              course.id === id
                ? { ...course, completed: !course.completed }
                : course
            ),
          }));
        },
      }),
      {
        name: "courses",
      }
    )
  )
);

export default useCourseStore;
