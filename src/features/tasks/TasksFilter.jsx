import { Filter } from "react-feather";
import SearchInput from "../../ui/SearchInput";

function TasksFilter() {
  return (
    <div className="tasks-filter">
      <SearchInput setValue={() => {}} placeholder="Find your project" />
      <button className="btn-sort">
        <Filter />
      </button>
    </div>
  );
}

export default TasksFilter;
