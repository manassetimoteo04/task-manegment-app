import ProjectDetails from "./ProjectDetails";
import ProjectsList from "./ProjectsList";

function ProjectGrid() {
  return (
    <div className="project-grid">
      <ProjectsList />
      <ProjectDetails />
    </div>
  );
}

export default ProjectGrid;
