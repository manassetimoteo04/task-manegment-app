import { useSelector } from "react-redux";
import { useApp } from "../../contexts/AppProvider";
import ProjectDetailsHeader from "./ProjectDetailsHeader";
import ProjectMenuFilter from "./ProjectMenuFilter";
import ProjectTasksList from "./ProjectTasksList";
import ProjectDetail from "./ProjextDetail";
import Spinner from "../../ui/Spinner";

function ProjectDetails() {
  const { showProjectTask } = useApp();
  const { getStatus } = useSelector((store) => store.projects);
  console.log(getStatus);
  return (
    <div className="project-details">
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
