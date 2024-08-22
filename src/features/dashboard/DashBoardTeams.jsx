import DashBoardTeamBox from "./DashBoardTeamBox";

function DashBoardTeams() {
  return (
    <div className="dashboard-teams">
      <header>
        <h3>Teams</h3>
      </header>

      <div className="dashboard-team-list">
        <DashBoardTeamBox />
        <DashBoardTeamBox />
        <DashBoardTeamBox />
        <DashBoardTeamBox />
        <DashBoardTeamBox />
      </div>
    </div>
  );
}

export default DashBoardTeams;
