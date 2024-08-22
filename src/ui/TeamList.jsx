import { Plus } from "react-feather";
import { useApp } from "../contexts/AppProvider";

function TeamList() {
  const { showSideBar } = useApp();

  return (
    <div className="menu-team">
      <span className="menu-tag">
        {showSideBar && (
          <>
            Team
            <button className="btn-create-team">
              <Plus size={18} />
            </button>
          </>
        )}
      </span>

      <ul className="team-list">
        {showSideBar && (
          <>
            <li>
              <span className="team-name">Duxica</span>
              <div className="users-team">
                <img src="file.png" alt="" />
                <img src="me.jpg" alt="" />
                <img src="file.png" alt="" />
                <img src="me.jpg" alt="" />
              </div>
            </li>
            <li>
              <span className="team-name">Duxica</span>
              <div className="users-team">
                <img src="file.png" alt="" />
                <img src="me.jpg" alt="" />
                <img src="file.png" alt="" />
                <img src="me.jpg" alt="" />
              </div>
            </li>
          </>
        )}
      </ul>
    </div>
  );
}

export default TeamList;
