import { useEffect } from "react";
import DashBoardTeamBox from "./DashBoardTeamBox";
import { useDispatch, useSelector } from "react-redux";
import { getTeamsDash } from "./DashboardSlice";
import TableSkeletonLoading from "../../ui/TableSkeletonLoading";

function DashBoardTeams() {
  const { currentUser } = useSelector((state) => state.auth);
  const { teams: dashBoardTeams, isLoading } = useSelector(
    (state) => state.dashboard
  );
  const DISPATCH = useDispatch();
  useEffect(() => {
    DISPATCH(getTeamsDash({ id: currentUser.id }));
  }, [currentUser.id]);
  return (
    <div className="dashboard-teams">
      <header>
        <h3>Teams</h3>
      </header>

      <div className="dashboard-team-list">
        {isLoading ? (
          <TableSkeletonLoading />
        ) : (
          dashBoardTeams.map((team) => (
            <DashBoardTeamBox team={team} key={team.id} />
          ))
        )}
      </div>
    </div>
  );
}

export default DashBoardTeams;
