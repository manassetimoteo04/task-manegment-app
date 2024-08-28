import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "./features/projects/projectSlice";
import taskReducer from "./features/tasks/taskSlice";
import { getTasks } from "./services/apiTasks";

const store = configureStore({
  reducer: {
    projects: projectReducer,
    tasks: taskReducer,
  },
});

export default store;
getTasks();

console.log(store.getState());
