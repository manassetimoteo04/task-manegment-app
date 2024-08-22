import { createContext, useContext, useReducer } from "react";

const AppContext = createContext();
const initalState = {
  showTaskForm: false,
  showProjectForm: false,
  showSideBar: false,
  showProjectTask: "task",
  showTaskDetail: false,
};
function reducer(state, action) {
  switch (action.type) {
    case "project/toggleForm":
      return { ...state, showProjectForm: !state.showProjectForm };
    case "project/showTasks":
      return { ...state, showProjectTask: action.payload };
    case "task/toggleForm":
      return { ...state, showTaskForm: !state.showTaskForm };
    case "task/toggleDetail":
      return { ...state, showTaskDetail: !state.showTaskDetail };
    case "app/showSideBar":
      return { ...state, showSideBar: !state.showSideBar };
    default:
      throw new Error("Unkown action");
  }
}
function AppProvider({ children }) {
  const [
    {
      showTaskForm,
      showProjectForm,
      showSideBar,
      showProjectTask,
      showTaskDetail,
    },
    dispatch,
  ] = useReducer(reducer, initalState);
  return (
    <AppContext.Provider
      value={{
        showProjectForm,
        showTaskForm,
        showSideBar,
        showProjectTask,
        showTaskDetail,
        dispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
export const useApp = () => useContext(AppContext);
export default AppProvider;
