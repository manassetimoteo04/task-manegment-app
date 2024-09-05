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
  currentConversation: null,
  showNotification: false,
  showSideBar: false,
  showProjectTask: "task",
  showPopup: null,
};
function reducer(state, action) {
  switch (action.type) {
    case "app/logout":
      return initalState;
    case "project/showTasks":
      return { ...state, showProjectTask: action.payload };
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
    case "messages/setCurrentConv":
      return { ...state, currentConversation: action.payload };
    case "messages/unSetCurrentConv":
      return { ...state, currentConversation: null };
    default:
      throw new Error("Unkown action");
  }
}
function AppProvider({ children }) {
  const [
    {
      showNotification,
      showSideBar,
      showProjectTask,
      showPopup,
      currentConversation,
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
  const [mobileShowMessage, setMobileShowMessage] = useState(false);
  const [showFullImg, setShowFullImg] = useState(null);
  const [showNewConList, setShowNewConvList] = useState(false);
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark-mode");
      document.documentElement.classList.remove("light-mode");
    } else {
      document.documentElement.classList.add("light-mode");
      document.documentElement.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  const values = {
    showNotification,
    showSideBar,
    showProjectTask,
    dispatch,
    isDarkMode,
    setIsDarkMode,
    showMessageUserDetail,
    setShowMessageUserDetail,
    showPopup,
    showProjectMobile,
    setShowProjectMobile,
    showTeamDetail,
    setShowTeamDetail,
    mobileShowMessage,
    setMobileShowMessage,
    showFullImg,
    setShowFullImg,
    showNewConList,
    setShowNewConvList,
    currentConversation,
  };
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}

export const useApp = () => useContext(AppContext);
export default AppProvider;
