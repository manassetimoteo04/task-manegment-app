import { Search } from "react-feather";

function ProjectSearchBar() {
  return (
    <form className="project-search-bar">
      <Search />
      <input type="text" placeholder="Find your Project" />
    </form>
  );
}

export default ProjectSearchBar;
