import { MoreVertical, Square } from "react-feather";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { useApp } from "../../contexts/AppProvider";
import Status from "../../ui/Status";
import { getCurrentTask } from "./taskSlice";
function TaskItem({ task }) {
  console.log(task);
  const {
    title,
    status,
    priority,
    responsable_id: enganged,
    duration,
    id,
  } = task;
  const navigate = useNavigate();
  const { dispatch } = useApp();
  const DISPATCH = useDispatch();
  function handleClick() {
    DISPATCH(getCurrentTask(id));
    dispatch({ type: "task/toggleDetail" });
  }
  return (
    <div className="task-item">
      <span>
        <Square />
      </span>
      <span>Project</span>
      <span>{title}</span>
      {/* <Status type="progress"></Status>k */}
      <span>{status}</span>
      <span>{priority}</span>
      <span>Enganged</span>
      <span>{duration} days</span>
      <span onClick={handleClick}>
        <MoreVertical size={20} />
      </span>
    </div>
  );
}

export default TaskItem;
