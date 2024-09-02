import { MoreVertical, Square } from "react-feather";
import TaskItem from "./TaskItem";
import TasksFilter from "./TasksFilter";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTasks } from "./taskSlice";
import PaginationBox from "../../ui/PaginationBox";
import { useSearchParams } from "react-router-dom";
import TableSekeletonLoading from "../../ui/TableSekeletonLoading";
import FilterBox from "../../ui/FilterBox";

function TasksTable() {
  const DISPATCH = useDispatch();
  const { allTasks, count, status } = useSelector((state) => state.tasks);
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page") ? +searchParams.get("page") : 1;
  useEffect(() => {
    DISPATCH(getAllTasks(page));
  }, [page]);

  return (
    <div className="tasks-table">
      {/* <TasksFilter /> */}
      <FilterBox />
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
          {status.type === "getAll" &&
            status.statu === "succeeded" &&
            allTasks.map((task) => <TaskItem task={task} key={task.id} />)}
          {status.type === "getAll" && status.statu === "loading" && (
            <TableSekeletonLoading />
          )}
        </div>
      </div>
      {count > allTasks.length && <PaginationBox count={count} />}
    </div>
  );
}

export default TasksTable;
