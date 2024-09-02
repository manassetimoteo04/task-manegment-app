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
import { Link } from "react-router-dom";
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

  return (
    <div className="task-item">
      <span>
        <Square />
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
