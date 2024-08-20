import { Filter, Plus, Search } from "react-feather";
import { useApp } from "../../contexts/AppProvider";
import Button from "../../ui/Button";

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
        <Button
          type="secondary"
          onClick={() => dispatch({ type: "task/toggleForm" })}
        >
          <Plus /> Add Task
        </Button>
      </nav>
      <div className="filter-box">
        <form className="project-search-bar">
          <Search />
          <input type="text" placeholder="Find your Task" />
        </form>

        <button>
          <Filter />
        </button>
      </div>
    </div>
  );
}

export default ProjectMenuFilter;
