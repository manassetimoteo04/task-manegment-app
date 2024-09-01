import { Settings, Shield, Trash, User } from "react-feather";
import { Link, useLocation } from "react-router-dom";

function SettingMenu() {
  return (
    <nav className="setting-menu">
      <ul>
        <li>
          <SubLink to="#geral">
            <Settings size={18} />
            <span>General</span>
          </SubLink>
        </li>
        <li>
          <SubLink to="#edit">
            <User size={18} />
            <span>Edit Profile</span>
          </SubLink>
        </li>
        <li>
          <SubLink to="#security">
            <Shield size={18} />
            <span>Security</span>
          </SubLink>
        </li>
        <li>
          <SubLink to="#delete" className="danger-btn">
            <Trash size={18} />
            <span>Delete account</span>
          </SubLink>
        </li>
      </ul>
    </nav>
  );
}
function SubLink({ children, to, className }) {
  const location = useLocation();
  const isActive = location.hash === to;

  return (
    <Link to={to} className={`${className} ${isActive ? "active" : ""}`}>
      {children}
    </Link>
  );
}

export default SettingMenu;
