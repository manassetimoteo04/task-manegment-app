import { useSelector } from "react-redux";
import { useApp } from "../../contexts/AppProvider";
import ProjectDetailsHeader from "./ProjectDetailsHeader";
import ProjectMenuFilter from "./ProjectMenuFilter";
import ProjectTasksList from "./ProjectTasksList";
import ProjectDetail from "./ProjectDetail";
import Spinner from "../../ui/Spinner";

function ProjectDetails() {
  const { showProjectTask } = useApp();
  const { getStatus, currentProject } = useSelector((store) => store.projects);
  return (
    <div className="project-details" id={currentProject.id}>
      {getStatus === "loading" ? (
        <Spinner />
      ) : (
        <>
          <ProjectDetailsHeader />
          <div className="project-scroller">
            <ProjectMenuFilter />
            {showProjectTask === "task" && <ProjectTasksList />}
            {showProjectTask === "detail" && <ProjectDetail />}
          </div>
        </>
      )}
    </div>
  );
}

export default ProjectDetails;
