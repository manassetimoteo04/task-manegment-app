import { useEffect } from "react";
import { FolderMinus, Clipboard, Users, Calendar } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import { getAllTasks } from "../tasks/taskSlice";
import { getProjectsData } from "../projects/projectSlice";
import {
  getProjectCount,
  getTasksCount,
  getTeamsCount,
  getTodayTasksCount,
} from "./DashboardSlice";
import DashboardSumSkeleton from "../../ui/DashboardSumSkeleton";

function DashBoardSummary() {
  const { teams, status } = useSelector((state) => state.teams);
  const { allTasks } = useSelector((state) => state.tasks);
  const { currentUser } = useSelector((state) => state.auth);
  const { projectCount, teamsCount, tasksCount, todayTasksCount, isLoading } =
    useSelector((state) => state.dashboard);
  const DISPATCH = useDispatch();
  const ids = teams.map((team) => team.id);

  useEffect(() => {
    DISPATCH(getTeamsCount({ id: currentUser.id }));
  }, []);

  useEffect(() => {
    if (status.statu === "succeeded" && status.type === "getAll") {
      const ids = teams.map((team) => team.id);
      DISPATCH(getProjectCount({ teams: ids }));
      DISPATCH(getTasksCount({ teams: ids }));
      DISPATCH(getTodayTasksCount({ teams: ids }));
    }
  }, [status.statu]);

  return (
    <div className="dashboard-summary">
      <div className="summary-box">
        {isLoading ? (
          <DashboardSumSkeleton />
        ) : (
          <>
            <span className="icon blue">
              <Users size={35} />
            </span>
            <div>
              <span className="summ-tag">Teams</span>
              <span className="total-summ">{teamsCount}</span>
            </div>
          </>
        )}
      </div>
      <div className="summary-box">
        {isLoading ? (
          <DashboardSumSkeleton />
        ) : (
          <>
            <span className="icon yellow">
              <FolderMinus size={35} />
            </span>
            <div>
              <span className="summ-tag">Projects</span>
              <span className="total-summ">{projectCount}</span>
            </div>
          </>
        )}
      </div>
      <div className="summary-box">
        {isLoading ? (
          <DashboardSumSkeleton />
        ) : (
          <>
            {" "}
            <span className="icon orange">
              <Clipboard size={35} />
            </span>
            <div>
              <span className="summ-tag">Tasks</span>
              <span className="total-summ">{tasksCount}</span>
            </div>
          </>
        )}
      </div>
      <div className="summary-box">
        {isLoading ? (
          <DashboardSumSkeleton />
        ) : (
          <>
            <span className="icon pink">
              <Calendar size={35} />
            </span>
            <div>
              <span className="summ-tag">Today's Task</span>
              <span className="total-summ">{todayTasksCount}</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default DashBoardSummary;
