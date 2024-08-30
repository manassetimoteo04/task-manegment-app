import { Filter, Plus, Search } from "react-feather";
import { useApp } from "../../contexts/AppProvider";
import SearchInput from "../../ui/SearchInput";

function ProjectMenuFilter() {
  const { showProjectTask, dispatch } = useApp();
  return (
    <div className="project-menu-filter">
      <nav className="project-filter-nav">
        <ul>
          <li
            className={showProjectTask === "task" ? "active" : ""}
            onClick={() =>
              dispatch({ type: "project/showTasks", payload: "task" })
            }
          >
            Tasks
          </li>
          <li
            className={showProjectTask === "detail" ? "active" : ""}
            onClick={() =>
              dispatch({ type: "project/showTasks", payload: "detail" })
            }
          >
            Detail
          </li>
        </ul>
      </nav>
      <div className="filter-box">
        <SearchInput setValue={() => {}} placeholder="Find your Task" />
        <button>
          <Filter />
        </button>
      </div>
    </div>
  );
}

export default ProjectMenuFilter;
