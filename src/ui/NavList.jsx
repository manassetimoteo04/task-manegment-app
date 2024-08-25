import {
  Calendar,
  Folder,
  FolderMinus,
  FolderPlus,
  Grid,
  Clipboard,
} from "react-feather";
import { NavLink } from "react-router-dom";
import { useApp } from "../contexts/AppProvider";

function NavList() {
  const { showSideBar } = useApp();

  return (
    <nav className="main-nav">
      <span className="menu-tag">Menu</span>
      <ul className="nav-list">
        <li>
          <NavLink to="dashboard">
            <Grid /> {showSideBar && `Dashboard`}
          </NavLink>
        </li>
        <li>
          <NavLink to="projects">
            <FolderMinus /> {showSideBar && `Projects`}
          </NavLink>
        </li>
        <li>
          <NavLink to="tasks">
            <Clipboard /> {showSideBar && `Tasks`}
          </NavLink>
        </li>
        {/* <li>
          <NavLink to="tasks">
            <FolderPlus /> {showSideBar && `All Tasks`}
          </NavLink>
        </li> */}
        <li>
          <NavLink to="calender">
            <Calendar /> {showSideBar && `Calender`}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavList;
