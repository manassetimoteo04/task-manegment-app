import { Bell, MessageSquare } from "react-feather";
import { useApp } from "../contexts/AppProvider";

function NotificationBox() {
  const { dispatch } = useApp();
  return (
    <div className="notification-box" onClick={(e) => e.preventDefault()}>
      <button onClick={() => dispatch({ type: "app/showNotification" })}>
        <Bell size={20} />
      </button>
    </div>
  );
}

export default NotificationBox;
