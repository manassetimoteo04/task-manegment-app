import { Bell, Calendar, User, X } from "react-feather";
import { useApp } from "../contexts/AppProvider";

function NotificationContainer() {
  const { dispatch } = useApp();

  return (
    <div className="notification-container">
      <header>
        <h3>Notification</h3>
        <button onClick={() => dispatch({ type: "app/closeNotification" })}>
          <X size={18} />
        </button>
      </header>
      <ul className="notitications-list">
        <NotificationItemBox />
        <NotificationItemBox />
      </ul>
    </div>
  );
}
function NotificationItemBox({ notification }) {
  return (
    <li className="notification-item-box">
      <span className="bell-icon">
        <Bell />
      </span>
      <div className="notification-content">
        <h4>Notification Title Here</h4>
        <p>Notification Description here</p>
        <div className="notification-footer">
          <span>
            <Calendar size={14} />
            <span>18 Abr 2024</span>
          </span>
          &bull;
          <span>
            <User size={14} />
            <span>Manasse Timóteo</span>
          </span>
        </div>
      </div>
    </li>
  );
}
export default NotificationContainer;
