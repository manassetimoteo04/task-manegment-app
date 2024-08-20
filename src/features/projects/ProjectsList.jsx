import ProjectFilter from "./ProjectFilter";
import ProjectListBox from "./ProjectListBox";
import ProjectSearchBar from "./ProjectSearchBar";

function ProjectsList() {
  return (
    <div className="projects-list">
      <ProjectFilter />
      <ProjectListBox />
    </div>
  );
}

export default ProjectsList;
