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
  showProjectForm: false,
  showSideBar: false,
  showProjectTask: "task",
  showTaskDetail: false,
  showTeamForm: false,
  showPopup: null,
};
function reducer(state, action) {
  switch (action.type) {
    case "project/showProjectForm":
      return { ...state, showProjectForm: !state.showProjectForm };
    case "project/closeProjectForm":
      return { ...state, showProjectForm: !state.showProjectForm };
    case "project/showTasks":
      return { ...state, showProjectTask: action.payload };
    case "task/toggleForm":
      return { ...state, showTaskForm: !state.showTaskForm };
    case "task/toggleDetail":
      return { ...state, showTaskDetail: !state.showTaskDetail };
    case "app/showSideBar":
      return { ...state, showSideBar: true };
    case "app/closeSideBar":
      return { ...state, showSideBar: false };
    case "app/showNotification":
      return { ...state, showNotification: true };
    case "app/closeNotification":
      return { ...state, showNotification: false };
    case "app/showPopup":
      return { ...state, showPopup: action.payload };
    case "app/closePopup":
      return { ...state, showPopup: null };
    case "team/showForm":
      return { ...state, showTeamForm: !state.showTeamForm };
    case "team/closeForm":
      return { ...state, showTeamForm: false };
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
      showTeamForm,
      showPopup,
    },
    dispatch,
  ] = useReducer(reducer, initalState);
  const [isDarkMode, setIsDarkMode] = useLocalStorage(
    "dark-mode",
    "isDarkMode"
  );
  const [showMessageUserDetail, setShowMessageUserDetail] = useState(false);
  const [showProjectMobile, setShowProjectMobile] = useState(false);
  const [showTeamDetail, setShowTeamDetail] = useState(false);
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
        showTeamForm,
        showPopup,
        showProjectMobile,
        setShowProjectMobile,
        showTeamDetail,
        setShowTeamDetail,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => useContext(AppContext);
export default AppProvider;
