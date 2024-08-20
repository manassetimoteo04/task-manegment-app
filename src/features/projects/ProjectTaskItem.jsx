import { MoreVertical, Square } from "react-feather";

function ProjectTaskItem() {
  return (
    <div className="task-item">
      <span className="center-align">
        <Square />
      </span>
      <span>Task</span>
      <span>Status</span>
      <span>Asignee</span>
      <span>Tags</span>
      <span className="center-align">
        <MoreVertical />
      </span>
    </div>
  );
}

export default ProjectTaskItem;
