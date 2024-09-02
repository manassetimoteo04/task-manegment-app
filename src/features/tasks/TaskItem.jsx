import { MoreVertical, Square } from "react-feather";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router";
import { useApp } from "../../contexts/AppProvider";
import Status from "../../ui/Status";
import { getCurrentTask } from "./taskSlice";
import { useEffect, useState } from "react";
import {
  getProjectImageName,
  getUserImageName,
} from "../../services/apiHelpers";
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
  const navigate = useNavigate();
  const location = useLocation();
  const { dispatch } = useApp();
  const [project, setProject] = useState({});
  const [responsable, setResponsable] = useState({});
  const DISPATCH = useDispatch();

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
    DISPATCH(getCurrentTask(id));
    dispatch({ type: "task/toggleDetail" });
  }
  return (
    <div className="task-item">
      <span>
        <Square />
      </span>
      <span>
        <img src={project.image} alt={project.name} /> {project.name}
      </span>
      <span>{title}</span>
      <Status type="progress">{status}</Status>
      <span>{priority}</span>
      <span></span>
      <span>{duration} days</span>
      <span onClick={handleClick}>
        <MoreVertical size={20} />
      </span>
    </div>
  );
}

export default TaskItem;
