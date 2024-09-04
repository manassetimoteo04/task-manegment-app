import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "./features/projects/projectSlice";
import taskReducer from "./features/tasks/taskSlice";
import teamReducer from "./features/teams/teamSlice";
import authReducer from "./features/authentication/AuthSlice";
import dashboardReducer from "./features/dashboard/DashboardSlice";
import calendarReducer from "./features/calender/calendarSlice";
import messagesReducer from "./features/messages/messagesSlice";
const store = configureStore({
  reducer: {
    projects: projectReducer,
    tasks: taskReducer,
    teams: teamReducer,
    auth: authReducer,
    dashboard: dashboardReducer,
    calendar: calendarReducer,
    messages: messagesReducer,
  },
});
export default store;
