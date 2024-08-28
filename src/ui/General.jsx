import { LogOut, Settings } from "react-feather";
import { Link, NavLink } from "react-router-dom";
import { useApp } from "../contexts/AppProvider";

function General() {
  const { showSideBar } = useApp();
  return (
    <div className="general-menu">
      <span className="menu-tag">{showSideBar && "General"}</span>

      <NavLink to="settings">
        <Settings />
        {showSideBar && "Settings"}
      </NavLink>
      <Link to="/login">
        <LogOut />
        {showSideBar && "Logout"}
      </Link>
    </div>
  );
}

export default General;
