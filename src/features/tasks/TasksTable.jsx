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
  const { allTasks, count, status, isLoading } = useSelector(
    (state) => state.tasks
  );
  const { teams } = useSelector((state) => state.teams);
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page") ? +searchParams.get("page") : 1;
  const filtervalue = searchParams.get("filter")
    ? searchParams.get("filter")
    : "";
  const filter = filtervalue
    ? {
        value: filtervalue === "all" ? "" : filtervalue,
        field: "status",
      }
    : "";

  const ids = teams.map((team) => team.id);
  useEffect(() => {
    DISPATCH(getAllTasks({ page, filter, teams: ids }));
  }, [page, filtervalue, teams]);
  console.log("all tasks: ", allTasks);
  return (
    <div className="tasks-table">
      {/* <TasksFilter /> */}
      <FilterBox />
      <div className="table">
        <header className="tasks-table-header">
          <span>
            <Square />
          </span>
          <span>Task</span>
          <span>Project</span>
          <span>Status</span>
          <span>Priority</span>
          <span>Enganged</span>
          <span>Duration</span>
          <span style={{ opacity: 0 }}>
            <MoreVertical size={20} />
          </span>
        </header>
        <div className="tasks-list">
          {isLoading ? (
            <TableSekeletonLoading />
          ) : (
            allTasks.map((task) => <TaskItem task={task} key={task.id} />)
          )}
        </div>
      </div>
      {count > allTasks.length && <PaginationBox count={count} />}
    </div>
  );
}

export default TasksTable;
