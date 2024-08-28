import { Link2, X } from "react-feather";
import Overlay from "../../ui/Overlay";
import Status from "../../ui/Status";
import TaskComments from "./TaskComments";
import { useNavigate } from "react-router";
import { useApp } from "../../contexts/AppProvider";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../ui/Spinner";
import { useEffect } from "react";
function TaskDetails() {
  const { dispatch } = useApp();
  const { currentTask, getStatus } = useSelector((state) => state.tasks);
  const DISPATCH = useDispatch();
  const {
    title,
    description,
    start_time: startTime,
    start_date: startDate,
    responsable_id: engangedId,
    priority,
    duration,
  } = currentTask;

  useEffect(() => {}, []);
  return (
    <Overlay>
      <div className="task-details">
        {getStatus === "loading" ? (
          <Spinner />
        ) : (
          <>
            <div className="task-action">
              <button className="btn-copy">
                <Link2 />
              </button>
              <button onClick={() => dispatch({ type: "task/toggleDetail" })}>
                <X />
              </button>
            </div>
            <header>
              <h4>{title}</h4>
              <p>{description}</p>
            </header>
            <div className="task-detail-content">
              <div>
                <span>Status</span>
                <div>
                  <Status type="progress">{priority}</Status>
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
                <span>Start Date</span>
                <div>{new Date(startDate).toDateString()}</div>
              </div>
              <div>
                <span>Duration</span>
                <div>{duration}</div>
              </div>
            </div>
            <TaskComments />
          </>
        )}
      </div>
    </Overlay>
  );
}

export default TaskDetails;
