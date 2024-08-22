import { MoreVertical } from "react-feather";
import TaskItem from "./TaskItem";
import TasksFilter from "./TasksFilter";

function TasksTable() {
  return (
    <div className="tasks-table">
      <TasksFilter />

      <div className="table">
        <header className="tasks-table-header">
          <span>Project</span>
          <span>Task</span>
          <span>Status</span>
          <span>Priority</span>
          <span>Enganged</span>
          <span>Due Date</span>
          <span style={{ opacity: 0 }}>
            <MoreVertical size={20} />
          </span>
        </header>
        <div className="tasks-list">
          <TaskItem />
          <TaskItem />
          <TaskItem />
          <TaskItem />
        </div>
      </div>
    </div>
  );
}

export default TasksTable;
