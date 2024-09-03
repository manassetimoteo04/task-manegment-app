import { Outlet, useLocation } from "react-router";
import Menu from "../ui/Menu";
import { useApp } from "../contexts/AppProvider";
import Header from "../ui/Header";
import NotificationContainer from "../ui/NotificationContainer";
import { useEffect, useRef, useState } from "react";
import TeamForm from "../features/teams/TeamForm";
import Overlay from "../ui/Overlay";
import Popup from "../ui/Popup";
import TaskForm from "../ui/TaskForm";
import ProjectForm from "../ui/ProjectForm";
import TeamDetail from "../features/teams/TeamDetail";
import { MIN_SWIPE_DISTANCE } from "../utils/constants";
import TaskDetails from "../features/tasks/TaskDetails";
import FullImage from "../ui/FullImage";

function AppLayout() {
  const {
    dispatch,
    showSideBar,
    showNotification,
    showPopup,
    showTeamDetail,
    showFullImg,
    showProjectForm,
    showTaskForm,
  } = useApp();
  const refEl = useRef();
  // const [swipe, setSwipe] = useState(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const minSwipeDistance = MIN_SWIPE_DISTANCE;
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
    const distance = touchStartX.current - touchEndX.current;
    if (Math.abs(distance) > minSwipeDistance) {
      if (distance > 0) {
        dispatch({ type: "app/closeSideBar" });
      } else {
        dispatch({ type: "app/showSideBar" });
      }
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
      {location.hash === "#newproject" && (
        <Overlay>
          <ProjectForm />
        </Overlay>
      )}

      {location.hash === "#newtask" && (
        <Overlay>
          <TaskForm />
        </Overlay>
      )}
      {location.hash === "#newteam" && (
        <Overlay>
          <TeamForm />
        </Overlay>
      )}
      {location.hash.startsWith("#team") && (
        <Overlay>
          <TeamDetail />
        </Overlay>
      )}
      {location.hash.startsWith("#task") && <TaskDetails />}

      {showPopup && <Popup />}
      {showFullImg && (
        <Overlay>
          <FullImage />
        </Overlay>
      )}
      <Outlet />
    </div>
  );
}

export default AppLayout;
