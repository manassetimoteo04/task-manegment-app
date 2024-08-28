import { Outlet } from "react-router";
import Menu from "../ui/Menu";
import { useApp } from "../contexts/AppProvider";
import Header from "../ui/Header";
import NotificationContainer from "../ui/NotificationContainer";
import { useEffect, useRef } from "react";

function AppLayout() {
  const { dispatch, showSideBar, showNotification } = useApp();
  const refEl = useRef();
  useEffect(() => {
    const event = (e) => {
      const target = e.target.closest(".notification-container");
      if (target) return;
      showNotification && dispatch({ type: "app/closeNotification" });
    };

    refEl.current.addEventListener("click", event);
  }, [showNotification]);
  return (
    <div className={`app ${showSideBar ? "show" : "hide"}`} ref={refEl}>
      <Header></Header>
      {showNotification && <NotificationContainer />}
      <Menu></Menu>

      <Outlet />
    </div>
  );
}

export default AppLayout;
