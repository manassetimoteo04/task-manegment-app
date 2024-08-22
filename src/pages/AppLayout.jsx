import { Outlet } from "react-router";
import Menu from "../ui/Menu";
import { useApp } from "../contexts/AppProvider";
import Header from "../ui/Header";

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
