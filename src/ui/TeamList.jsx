import { Plus } from "react-feather";
import { useApp } from "../contexts/AppProvider";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTeams } from "../features/teams/teamSlice";

function TeamList() {
  const { showSideBar, dispatch } = useApp();
  const { teams, status } = useSelector((state) => state.teams);
  const DISPATCH = useDispatch();
  useEffect(() => {
    DISPATCH(getAllTeams());
  }, []);

  if (!showSideBar) return <div></div>;
  return (
    <div className="menu-team">
      <span className="menu-tag">
        {showSideBar && (
          <>
            Team
            <button
              className="btn-create-team"
              onClick={() => dispatch({ type: "team/showForm" })}
            >
              <Plus size={18} />
            </button>
          </>
        )}
      </span>

      <ul className="team-list">
        {showSideBar &&
          teams.map((team) => <TeamListItem team={team} key={team.id} />)}
      </ul>
    </div>
  );
}
function TeamListItem({ team }) {
  return (
    <li>
      <span className="team-name">{team.name}</span>
      <div className="users-team">
        <img src={team.image} alt={team.name} />
      </div>
    </li>
  );
}

export default TeamList;
