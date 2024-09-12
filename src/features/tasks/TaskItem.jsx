import { Check, MoreVertical, Square } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router";
import { useApp } from "../../contexts/AppProvider";
import Status from "../../ui/Status";
import { getCurrentTask, updateTaskStatus } from "./taskSlice";
import { useEffect, useState } from "react";
import {
  getProjectImageName,
  getUserImageName,
} from "../../services/apiHelpers";
import { Link } from "react-router-dom";
import { useShowPopup } from "../../hooks/useShowPopup";
function TaskItem({ task }) {
  const {
    title,
    status,
    priority,
    project_id: projectID,
    responsable_id: enganged,
    duration,
    id,
  } = task;
  const { status: taskStatus } = useSelector((state) => state.tasks);
  const navigate = useNavigate();
  const location = useLocation();
  const [project, setProject] = useState({});
  const [responsable, setResponsable] = useState({});
  const DISPATCH = useDispatch();
  const [showPopup] = useShowPopup();

  const isCompleted = status === "done";
  useEffect(() => {
    async function getAsync() {
      const project = await getProjectImageName(projectID);
      const user = await getUserImageName(enganged);
      setProject(project);
      setResponsable(user);
    }
    getAsync();
  }, []);
  function handleClick() {
    DISPATCH(
      updateTaskStatus({ id: id, value: isCompleted ? "pending" : "done" })
    );
  }
  useEffect(() => {
    if (taskStatus.type === "updateStatus" && taskStatus.statu === "succeeded")
      showPopup({
        type: "success",
        message: "Task status updated successfully",
      });
    if (taskStatus.type === "updateStatus" && taskStatus.statu === "failed")
      showPopup({ type: "error", message: "Ups, failed to update status" });
  }, [taskStatus.statu]);
  return (
    <div className="task-item">
      <span>
        <button
          className={`btn-check-complete ${isCompleted ? "active" : ""}`}
          onClick={handleClick}
        >
          {isCompleted && <Check size={15} />}
        </button>
      </span>
      <span>{title}</span>
      <span>
        <img src={project.image} alt={project.name} /> {project.name}
      </span>
      <span>{status}</span>
      <span>{priority}</span>
      <span>
        <img src={responsable.avatar} alt={responsable.name} />
      </span>
      <span>{duration} days</span>
      <span>
        <Link to={`${location.search}#task/${id}`}>
          <MoreVertical size={20} />
        </Link>
      </span>
    </div>
  );
}

export default TaskItem;
