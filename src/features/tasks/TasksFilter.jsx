import { Filter } from "react-feather";
import TaskSearchBar from "./TaskSeacrhBar";

function TasksFilter() {
  return (
    <div className="tasks-filter">
      <TaskSearchBar />
      <button className="btn-sort">
        <Filter />
      </button>
    </div>
  );
}

export default TasksFilter;
