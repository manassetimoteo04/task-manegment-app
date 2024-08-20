import { Settings } from "react-feather";
import { Link } from "react-router-dom";
import { useApp } from "../../contexts/AppProvider";

function General() {
  const { showSideBar } = useApp();
  return (
    <div className="general-menu">
      <span className="menu-tag">{showSideBar && "General"}</span>
      <Link to="settings">
        <Settings />
        {showSideBar && "Settings"}
      </Link>
    </div>
  );
}

export default General;
