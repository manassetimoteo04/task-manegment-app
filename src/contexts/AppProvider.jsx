import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const AppContext = createContext();
const initalState = {
  showNotification: false,
  showTaskForm: false,
  showProjectForm: true,
  showSideBar: true,
  showProjectTask: "task",
  showTaskDetail: false,
};
function reducer(state, action) {
  switch (action.type) {
    case "project/showProjectForm":
      return { ...state, showProjectForm: !state.showProjectForm };
    case "project/closeProjectForm":
      return { ...state, showProjectForm: false };
    case "project/showTasks":
      return { ...state, showProjectTask: action.payload };
    case "task/toggleForm":
      return { ...state, showTaskForm: !state.showTaskForm };
    case "task/toggleDetail":
      return { ...state, showTaskDetail: !state.showTaskDetail };
    case "app/showSideBar":
      return { ...state, showSideBar: !state.showSideBar };
    case "app/showNotification":
      return { ...state, showNotification: true };
    case "app/closeNotification":
      return { ...state, showNotification: false };
    default:
      throw new Error("Unkown action");
  }
}
function AppProvider({ children }) {
  const [
    {
      showNotification,
      showTaskForm,
      showProjectForm,
      showSideBar,
      showProjectTask,
      showTaskDetail,
    },
    dispatch,
  ] = useReducer(reducer, initalState);
  const [isDarkMode, setIsDarkMode] = useLocalStorage(
    "dark-mode",
    "isDarkMode"
  );
  const [showMessageUserDetail, setShowMessageUserDetail] = useState(true);
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark-mode");
      document.documentElement.classList.remove("light-mode");
    } else {
      document.documentElement.classList.add("light-mode");
      document.documentElement.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  return (
    <AppContext.Provider
      value={{
        showNotification,
        showProjectForm,
        showTaskForm,
        showSideBar,
        showProjectTask,
        showTaskDetail,
        dispatch,
        isDarkMode,
        setIsDarkMode,
        showMessageUserDetail,
        setShowMessageUserDetail,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => useContext(AppContext);
export default AppProvider;
