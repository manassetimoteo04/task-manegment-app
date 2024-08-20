import { Bell, MessageSquare } from "react-feather";

function NotificationBox() {
  return (
    <div className="notification-box">
      <button>
        <MessageSquare size={20} />
      </button>
      <button>
        <Bell size={20} />
      </button>
    </div>
  );
}

export default NotificationBox;
