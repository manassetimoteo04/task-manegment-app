import DashBoardTeams from "./DashBoardTeams";
import DashBoardTodayTask from "./DashBoardTodayTask";

function DashBoardGrid() {
  return (
    <div className="dashboard-grid">
      <DashBoardTodayTask />
      <DashBoardTeams />
    </div>
  );
}

export default DashBoardGrid;
