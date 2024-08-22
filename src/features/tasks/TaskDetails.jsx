import { Link2, X } from "react-feather";
import Overlay from "../../ui/Overlay";
import Status from "../../ui/Status";
import TaskComments from "./TaskComments";
import { useNavigate } from "react-router";
import { useApp } from "../../contexts/AppProvider";
function TaskDetails() {
  const { dispatch } = useApp();
  return (
    <Overlay>
      <div className="task-details">
        <div className="task-action">
          <button className="btn-copy">
            <Link2 />
          </button>
          <button onClick={() => dispatch({ type: "task/toggleDetail" })}>
            <X />
          </button>
        </div>
        <header>
          <h4>Send Email end Folloe up docs</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit, end Folloe
            up docs Lorem ipsum dolor sit amet consectetur adipisicing elit{" "}
          </p>
        </header>
        <div className="task-detail-content">
          <div>
            <span>Status</span>
            <div>
              <Status type="progress">In-progress</Status>
            </div>
          </div>
          <div>
            <span>Assigned to</span>
            <div>
              <img src="me.jpg" alt="" className="assigned-img" /> Manasse
              Timóteo
            </div>
          </div>
          <div>
            <span>Due Date</span>
            <div>12 Jun 2024</div>
          </div>
        </div>
        <TaskComments />
      </div>
    </Overlay>
  );
}

export default TaskDetails;
