import { Link } from "react-router-dom";

function DashBoardTeamBox() {
  return (
    <Link className="dashboard-team-box">
      <span className="team-name">Team Name</span>
      <div className="team-imgs">
        <img src="file.png" alt="" />
      </div>
    </Link>
  );
}

export default DashBoardTeamBox;
