import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "./features/projects/projectSlice";
import taskReducer from "./features/tasks/taskSlice";
import { getTasks } from "./services/apiTasks";
import teamReducer from "./features/teams/teamSlice";
import authReducer from "./features/authentication/AuthSlice";
import dashboardReducer from "./features/dashboard/DashboardSlice";
const store = configureStore({
  reducer: {
    projects: projectReducer,
    tasks: taskReducer,
    teams: teamReducer,
    auth: authReducer,
    dashboard: dashboardReducer,
  },
});

export default store;
getTasks();
