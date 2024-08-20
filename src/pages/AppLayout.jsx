import { Outlet } from "react-router";
import Header from "../components/header/Header";
import Main from "../components/main/Main";
import Menu from "../components/menu/Menu";
import { useApp } from "../contexts/AppProvider";

function AppLayout() {
  const { showSideBar } = useApp();
  return (
    <div
      className="app"
      style={{ gridTemplateColumns: `${showSideBar ? "30rem" : "7rem"} 1fr` }}
    >
      <Header></Header>
      <Menu></Menu>
      {/* <Main></Main> */}
      <Outlet />
    </div>
  );
}

export default AppLayout;
