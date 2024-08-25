import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "./features/projects/projectSlice";
import { getTasks } from "./services/apiTasks";

const store = configureStore({
  reducer: {
    projects: projectReducer,
  },
});

export default store;
getTasks();

console.log(store.getState());
