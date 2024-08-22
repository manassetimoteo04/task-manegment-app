import { MoreVertical } from "react-feather";

import { useNavigate } from "react-router";
import { useApp } from "../../contexts/AppProvider";
function TaskItem() {
  const navigate = useNavigate();
  const { dispatch } = useApp();
  return (
    <div className="task-item">
      <span>Project</span>
      <span>Task</span>
      <span>Status</span>
      <span>Priority</span>
      <span>Enganged</span>
      <span>Due Date</span>
      <span
        onClick={() => {
          dispatch({ type: "task/toggleDetail" });
        }}
      >
        <MoreVertical size={20} />
      </span>
    </div>
  );
}

export default TaskItem;
