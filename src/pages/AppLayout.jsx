import { Outlet, useLocation } from "react-router";
import Menu from "../ui/Menu";
import { useApp } from "../contexts/AppProvider";
import Header from "../ui/Header";
import NotificationContainer from "../ui/NotificationContainer";
import { useEffect, useRef, useState } from "react";
import TeamForm from "../features/teams/TeamForm";
import Overlay from "../ui/Overlay";
import Popup from "../ui/Popup";
import LogoutPopup from "../ui/LogoutPopup";
import TeamDetail from "../features/teams/TeamDetail";

function AppLayout() {
  const {
    dispatch,
    showSideBar,
    showNotification,
    showTeamForm,
    showPopup,
    showTeamDetail,
  } = useApp();
  const refEl = useRef();
  const [swipe, setSwipe] = useState(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const location = useLocation();

  useEffect(() => {
    const event = (e) => {
      const target = e.target.closest(".notification-container");
      if (target) return;
      showNotification && dispatch({ type: "app/closeNotification" });
    };

    refEl.current.addEventListener("click", event);
  }, [showNotification]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].screenX;
    handleSwipe();
  };

  const handleSwipe = () => {
    if (touchEndX.current < touchStartX.current) {
      setSwipe("left");
      console.log("Swipe left detected: ", swipe);
      dispatch({ type: "app/closeSideBar" });
    }
    if (touchEndX.current > touchStartX.current) {
      setSwipe("right");
      dispatch({ type: "app/showSideBar" });

      console.log("Swipe left detected: ", swipe);
    }
  };
  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className={`app ${showSideBar ? "show" : "hide"}`}
      ref={refEl}
    >
      <Header></Header>
      {showNotification && <NotificationContainer />}
      <Menu></Menu>
      {/* {showTeamForm && (
        <Overlay>
          <TeamForm />
        </Overlay>
      )} */}
      {location.hash === "#newteam" && (
        <Overlay>
          <TeamForm />
        </Overlay>
      )}
      {showTeamDetail && (
        <Overlay>
          <TeamDetail />
        </Overlay>
      )}
      {showPopup && <Popup />}
      {/* <Overlay>
        <LogoutPopup />
      </Overlay> */}
      <Outlet />
    </div>
  );
}

export default AppLayout;
