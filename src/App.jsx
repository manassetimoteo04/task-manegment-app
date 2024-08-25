import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import AppLayout from "./pages/AppLayout";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Tasks from "./pages/Tasks";
import Calender from "./pages/Calender";
import AppProvider from "./contexts/AppProvider";
import Setting from "./pages/Setting";
import TaskDetails from "./features/tasks/TaskDetails";
function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />}></Route>
            <Route path="projects" element={<Projects />}></Route>
            <Route path="tasks" element={<Tasks />}>
              {/* <Route path="task" element={<TaskDetails />}></Route> */}
            </Route>

            <Route path="calender" element={<Calender />}></Route>
            <Route path="settings" element={<Setting />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
