import ProjectFilter from "./ProjectFilter";
import ProjectListBox from "./ProjectListBox";
import ProjectSearchBar from "./ProjectSearchBar";
import ProjectsHeader from "./ProjectsHeader";

function ProjectsList() {
  return (
    <div className="projects-list">
      <ProjectsHeader />
      <ProjectFilter />
      <ProjectListBox />
    </div>
  );
}

export default ProjectsList;
