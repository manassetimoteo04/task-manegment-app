import { ChevronDown } from "react-feather";
import Status from "../../ui/Status";

function DashBoardTaskBox() {
  return (
    <div className="task-box">
      <span className="task-icon">
        <ChevronDown />
      </span>
      <span className="task-name">Task</span>
      <span className="no-mobile">Today</span>
      <Status type="progress">progress</Status>
      <span className="img-enganged">
        <img src="me.jpg" alt="" />{" "}
      </span>
      <span className="no-mobile">Priority</span>
    </div>
  );
}

export default DashBoardTaskBox;
