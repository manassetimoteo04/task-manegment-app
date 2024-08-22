import { ChevronDown } from "react-feather";
import Status from "../../ui/Status";
import DashBoardTaskBox from "./DashBoardTaskBox";
function DashBoardTodayTask() {
  return (
    <div className="today-tasks-box">
      <header>
        <h3>Today's Tasks</h3>
      </header>
      <div className="task-list">
        <DashBoardTaskBox />
        <DashBoardTaskBox />
        <DashBoardTaskBox />
        <DashBoardTaskBox />
        <DashBoardTaskBox />
      </div>
    </div>
  );
}

export default DashBoardTodayTask;
