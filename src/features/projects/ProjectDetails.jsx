import ProjectDetailsHeader from "./ProjectDetailsHeader";
import ProjectMenuFilter from "./ProjectMenuFilter";
import ProjectTasksList from "./ProjectTasksList";

function ProjectDetails() {
  return (
    <div className="project-details">
      <ProjectDetailsHeader />
      <ProjectMenuFilter />
      <ProjectTasksList />
    </div>
  );
}

export default ProjectDetails;
