import { useEffect } from "react";
import { FolderMinus, Clipboard, Users, Calendar } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import { getAllTasks } from "../tasks/taskSlice";
import { getProjectsData } from "../projects/projectSlice";

function DashBoardSummary() {
  const { teams } = useSelector((state) => state.teams);
  const { data: projects, status } = useSelector((state) => state.projects);
  const { allTasks } = useSelector((state) => state.tasks);
  const DISPATCH = useDispatch();
  useEffect(() => {
    DISPATCH(getAllTasks());
    if (status.statu === "succeeded" && status.type === "getAll") {
      const ids = teams.map((team) => team.id);
      DISPATCH(getProjectsData(ids));
    }
  }, []);
  return (
    <div className="dashboard-summary">
      <div className="summary-box">
        <span className="icon blue">
          <Users size={35} />
        </span>
        <div>
          <span className="summ-tag">Teams</span>
          <span className="total-summ">{teams.length}</span>
        </div>
      </div>
      <div className="summary-box">
        <span className="icon yellow">
          <FolderMinus size={35} />
        </span>
        <div>
          <span className="summ-tag">Projects</span>
          <span className="total-summ">{projects.length}</span>
        </div>
      </div>
      <div className="summary-box">
        <span className="icon orange">
          <Clipboard size={35} />
        </span>
        <div>
          <span className="summ-tag">Tasks</span>
          <span className="total-summ">{allTasks.length}</span>
        </div>
      </div>
      <div className="summary-box">
        <span className="icon pink">
          <Calendar size={35} />
        </span>
        <div>
          <span className="summ-tag">Today's</span>
          <span className="total-summ">234</span>
        </div>
      </div>
    </div>
  );
}

export default DashBoardSummary;
