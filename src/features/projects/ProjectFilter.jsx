import ProjectFilterBox from "./ProjectFilterBox";
import ProjectSearchBar from "./ProjectSearchBar";

function ProjectFilter() {
  return (
    <div className="project-filter">
      <ProjectSearchBar />
      <ProjectFilterBox />
    </div>
  );
}

export default ProjectFilter;
