import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import AppLayout from "./pages/AppLayout";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import TodayTasks from "./pages/TodayTasks";
import AllTasks from "./pages/AllTasks";
import Calender from "./pages/Calender";
import AppProvider from "./contexts/AppProvider";

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />}></Route>
            <Route path="projects" element={<Projects />}></Route>
            <Route path="todaytasks" element={<TodayTasks />}></Route>
            <Route path="tasks" element={<AllTasks />}></Route>
            <Route path="calender" element={<Calender />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
