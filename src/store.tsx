import create from "zustand";

//persist stores state in local storage by default
import { devtools, persist } from "zustand/middleware";

interface Todo {
  id: number;
  description: string;
  completed: boolean;
}

interface TodoState {
  tasks: Todo[];
  addTask: (description: string, id: number) => void;
  removeTask: (id: number) => void;
  toggleTaskStatus: (id: number) => void;
}

const useTasksStore = create<TodoState>()(
  devtools(
    //persist's second argument is the name in localstorage
    persist(
      (set) => ({
        tasks: [],
        addTask: (description: string, id: number) => {
          set((state) => ({
            tasks: [{ id, description, completed: false }, ...state.tasks],
          }));
        },
        removeTask: (id: number) => {
          set((state) => ({
            tasks: state.tasks.filter((task) => task.id !== id),
          }));
        },
        toggleTaskStatus: (id: number) => {
          set((state) => ({
            tasks: state.tasks.map((task) =>
              task.id === id ? { ...task, completed: !task.completed } : task
            ),
          }));
        },
      }),
      {
        name: "tasks",
      }
    )
  )
);

export default useTasksStore;
