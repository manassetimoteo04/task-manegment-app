import { useApp } from "../../contexts/AppProvider";
import ProjectDetailsHeader from "./ProjectDetailsHeader";
import ProjectMenuFilter from "./ProjectMenuFilter";
import ProjectTasksList from "./ProjectTasksList";
import ProjectDetail from "./ProjextDetail";

function ProjectDetails() {
  const { showProjectTask } = useApp();
  return (
    <div className="project-details">
      <ProjectDetailsHeader />
      <div className="project-scroller">
        <ProjectMenuFilter />
        {showProjectTask === "task" && <ProjectTasksList />}
        {showProjectTask === "detail" && <ProjectDetail />}
      </div>
    </div>
  );
}

export default ProjectDetails;
