import { MoreVertical, Square } from "react-feather";
import TaskItem from "./TaskItem";
import TasksFilter from "./TasksFilter";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTasks } from "./taskSlice";
import PaginationBox from "../../ui/PaginationBox";

function TasksTable() {
  const DISPATCH = useDispatch();
  const { allTasks } = useSelector((state) => state.tasks);
  useEffect(() => {
    DISPATCH(getAllTasks());
  }, []);
  return (
    <div className="tasks-table">
      <TasksFilter />

      <div className="table">
        <header className="tasks-table-header">
          <span>
            <Square />
          </span>
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
          {allTasks.map((task) => (
            <TaskItem task={task} key={task.id} />
          ))}
        </div>
      </div>
      <PaginationBox />
    </div>
  );
}

export default TasksTable;
