import { Users } from "react-feather";
import { Link, useNavigate } from "react-router-dom";

function DashBoardTeamBox({ team }) {
  const navigate = useNavigate();
  return (
    <div
      className="dashboard-team-box"
      onClick={() => navigate(`#team/${team.id}`)}
    >
      <div>
        <span className="team-icon">
          <Users size={18} />
        </span>
        <h4 className="team-name">{team.name}</h4>
      </div>
      <span>{team.bio}</span>
      <img src={team.image ? team.image : "default-user-jpg"} alt="" />
    </div>
  );
}

export default DashBoardTeamBox;
