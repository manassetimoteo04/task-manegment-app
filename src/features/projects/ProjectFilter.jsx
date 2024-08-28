import SearchInput from "../../ui/SearchInput";
import ProjectFilterBox from "./ProjectFilterBox";
import ProjectSearchBar from "./ProjectSearchBar";

function ProjectFilter() {
  return (
    <div className="project-filter">
      <SearchInput setValue={() => {}} placeholder="Find your project" />
    </div>
  );
}

export default ProjectFilter;
