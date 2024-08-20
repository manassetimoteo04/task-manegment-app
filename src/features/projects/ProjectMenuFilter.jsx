import { Filter, Search } from "react-feather";

function ProjectMenuFilter() {
  return (
    <div className="project-menu-filter">
      <nav className="project-filter-nav">
        <ul>
          <li className="active">Tasks</li>
          <li>Detail</li>
          <li>Docs</li>
          <li>Assets</li>
          <li>Members</li>
        </ul>
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
