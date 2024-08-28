import { Suspense, lazy } from "react";
import {
  BrowserRouter,
  HashRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

// import AppLayout from "./pages/AppLayout";
// import Dashboard from "./pages/Dashboard";
// import Projects from "./pages/Projects";
// import Tasks from "./pages/Tasks";
// import Calender from "./pages/Calender";
import AppProvider from "./contexts/AppProvider";
import Spinner from "./ui/Spinner";
import FulllpageSpinner from "./ui/FulllpageSpinner";
import PageNotFound from "./pages/PageNotFound";
import NotificationContainer from "./ui/NotificationContainer";
// import Setting from "./pages/Setting";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";

const AppLayout = lazy(() => import("./pages/AppLayout"));
const Projects = lazy(() => import("./pages/Projects"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Tasks = lazy(() => import("./pages/Tasks"));
const Calender = lazy(() => import("./pages/Calender"));
const Setting = lazy(() => import("./pages/Setting"));
const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));
const Messages = lazy(() => import("./pages/Messages"));

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Suspense fallback={<FulllpageSpinner />}>
          <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route index element={<Navigate replace to="dashboard" />} />
              <Route path="dashboard" element={<Dashboard />}></Route>
              <Route path="projects" element={<Projects />}></Route>
              <Route path="tasks" element={<Tasks />}></Route>
              <Route path="messages" element={<Messages />}></Route>

              <Route path="calender" element={<Calender />}></Route>
              <Route path="settings" element={<Setting />}></Route>
            </Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="*" element={<PageNotFound />}></Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
