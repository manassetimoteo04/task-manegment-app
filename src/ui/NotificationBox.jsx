import { Bell, MessageSquare } from "react-feather";
import { useApp } from "../contexts/AppProvider";

function NotificationBox() {
  const { dispatch, showNotification } = useApp();
  return (
    <div className="notification-box" onClick={(e) => e.preventDefault()}>
      <button
        className={showNotification ? "active" : ""}
        onClick={() => dispatch({ type: "app/showNotification" })}
      >
        <Bell size={20} />
      </button>
    </div>
  );
}

export default NotificationBox;
