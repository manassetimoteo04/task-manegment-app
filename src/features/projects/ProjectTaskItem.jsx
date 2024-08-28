import { MoreVertical, Square } from "react-feather";
import { useApp } from "../../contexts/AppProvider";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentTask } from "../tasks/taskSlice";

function ProjectTaskItem({ task }) {
  const { title, responsible_id: enganged, priority, description, id } = task;
  const { dispatch } = useApp();
  const DISPATCH = useDispatch();
  function handleClick() {
    dispatch({ type: "task/toggleDetail" });
    DISPATCH(getCurrentTask(id));
  }
  return (
    <div className="task-item">
      <span className="center-align">
        <Square />
      </span>
      <span>{title}</span>
      <span>{priority}</span>
      <span>{enganged}</span>
      <span>{description}</span>
      <span className="center-align" onClick={handleClick}>
        <MoreVertical />
      </span>
    </div>
  );
}

export default ProjectTaskItem;
