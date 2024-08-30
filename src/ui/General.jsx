import { LogOut, Settings } from "react-feather";
import { Link, NavLink } from "react-router-dom";
import { useApp } from "../contexts/AppProvider";
import { logout } from "../features/authentication/AuthSlice";
import { useDispatch } from "react-redux";

function General() {
  const { showSideBar } = useApp();
  const DISPATCH = useDispatch();
  return (
    <div className="general-menu">
      <span className="menu-tag">General</span>

      <NavLink to="settings">
        <Settings />
        {showSideBar && "Settings"}
      </NavLink>
      <Link onClick={() => DISPATCH(logout())} role="button">
        <LogOut />
        {showSideBar && "Logout"}
      </Link>
    </div>
  );
}

export default General;
