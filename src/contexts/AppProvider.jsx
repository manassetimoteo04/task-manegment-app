import { createContext, useContext, useReducer } from "react";

const AppContext = createContext();
const initalState = {
  showTaskForm: false,
  showProjectForm: false,
  showSideBar: false,
};
function reducer(state, action) {
  switch (action.type) {
    case "project/toggleForm":
      return { ...state, showProjectForm: !state.showProjectForm };
    case "task/toggleForm":
      return { ...state, showTaskForm: !state.showTaskForm };
    case "app/showSideBar":
      return { ...state, showSideBar: !state.showSideBar };
    default:
      throw new Error("Unkown action");
  }
}
function AppProvider({ children }) {
  const [{ showTaskForm, showProjectForm, showSideBar }, dispatch] = useReducer(
    reducer,
    initalState
  );
  return (
    <AppContext.Provider
      value={{ showProjectForm, showTaskForm, showSideBar, dispatch }}
    >
      {children}
    </AppContext.Provider>
  );
}
export const useApp = () => useContext(AppContext);
export default AppProvider;
