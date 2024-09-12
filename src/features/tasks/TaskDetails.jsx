import { Link2, X } from "react-feather";
import Overlay from "../../ui/Overlay";
import Status from "../../ui/Status";
import TaskComments from "./TaskComments";
import { useLocation, useNavigate, useNavigation } from "react-router";
import { useApp } from "../../contexts/AppProvider";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../ui/Spinner";
import { useEffect, useState } from "react";
import { useGetUserImg } from "../../hooks/useGetUserImg";
import { useShowPopup } from "../../hooks/useShowPopup";
import { getCurrentTask, updateTaskStatus } from "./taskSlice";
function TaskDetails() {
  const [statuValue, setStatuValue] = useState("");
  const DISPATCH = useDispatch();
  const navigate = useNavigate();
  const [showPopup] = useShowPopup();
  const location = useLocation();
  const { currentTask, status } = useSelector((state) => state.tasks);
  // const isAllowed= cur
  const {
    title,
    description,
    start_time: startTime,
    start_date: startDate,
    responsable_id: engangedId,
    status: taskStatus,
    duration,
  } = currentTask;
  const id = location.hash.split("/").at(1);
  useEffect(() => {
    if (statuValue !== "")
      DISPATCH(updateTaskStatus({ id: currentTask.id, value: statuValue }));
  }, [statuValue]);

  useEffect(() => {
    if (status.type === "updateStatus" && status.statu === "loading")
      showPopup({ type: "loading", message: "Updating status..." });
    if (status.type === "updateStatus" && status.statu === "succeeded")
      showPopup({
        type: "success",
        message: "Task status updated successfully",
      });
    if (status.type === "updateStatus" && status.statu === "failed")
      showPopup({ type: "error", message: "Ups, failed to update status" });
  }, [status.statu]);

  useEffect(() => {
    DISPATCH(getCurrentTask(id));
  }, []);
  function handleChange(e) {
    setStatuValue(e.target.value);
  }

  const [enganged] = useGetUserImg(engangedId);
  return (
    <Overlay>
      <div className="task-details" id={currentTask.id}>
        {status.type === "get" && status.statu === "loading" ? (
          <Spinner />
        ) : (
          <>
            <div className="task-action">
              <select
                className="status-select"
                value={statuValue}
                onChange={handleChange}
              >
                <option value="pending">Pending</option>
                <option value="doing">Doing</option>
                <option value="done">Done</option>
              </select>

              <button onClick={() => navigate(-1)}>
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
                  <Status type="progress">{taskStatus}</Status>
                </div>
              </div>
              <div>
                <span>Assigned to</span>
                <div>
                  <img
                    src={enganged.avatar ? enganged.avatar : "default-user.jpg"}
                    alt=""
                    className="assigned-img"
                  />
                  {enganged.name}
                </div>
              </div>
              <div>
                <span>Start Date</span>
                <div>{new Date(startDate).toDateString()}</div>
              </div>
              <div>
                <span>Duration</span>
                <div>{duration} days</div>
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
