import { ChevronDown } from "react-feather";

import DashBoardTaskBox from "./DashBoardTaskBox";
import { getRecentTasksDash } from "./DashboardSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import TableSkeletonLoading from "../../ui/TableSkeletonLoading";
import NoSelectedItem from "../../ui/NoSelectedItem";
function DashBoardTodayTask() {
  const { teams, status } = useSelector((state) => state.teams);
  const { recentTasks, isLoading } = useSelector((state) => state.dashboard);
  const DISPATCH = useDispatch();
  useEffect(() => {
    if (status.statu === "succeeded" && status.type === "getAll") {
      const ids = teams.map((team) => team.id);
      DISPATCH(getRecentTasksDash({ teams: ids }));
    }
  }, [status.statu]);
  return (
    <div className="today-tasks-box">
      <header>
        <h3>Recent Tasks</h3>
      </header>
      <div className="task-list">
        {isLoading ? (
          <TableSkeletonLoading />
        ) : (
          recentTasks?.map((task) => (
            <DashBoardTaskBox key={task.id} task={task} />
          ))
        )}
      </div>
    </div>
  );
}

export default DashBoardTodayTask;
