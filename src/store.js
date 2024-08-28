import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "./features/projects/projectSlice";
import taskReducer from "./features/tasks/taskSlice";
import { getTasks } from "./services/apiTasks";
import teamReducer from "./features/teams/teamSlice";
const store = configureStore({
  reducer: {
    projects: projectReducer,
    tasks: taskReducer,
    teams: teamReducer,
  },
});

export default store;
getTasks();

console.log(store.getState());
