import { useSelector } from "react-redux";
import { useApp } from "../../contexts/AppProvider";
import ProjectDetailsHeader from "./ProjectDetailsHeader";
import ProjectMenuFilter from "./ProjectMenuFilter";
import ProjectTasksList from "./ProjectTasksList";
import ProjectDetail from "./ProjectDetail";
import Spinner from "../../ui/Spinner";
import NoSelectedItem from "../../ui/NoSelectedItem";

function ProjectDetails() {
  const { showProjectTask, showProjectMobile } = useApp();
  const { getStatus, currentProject } = useSelector((store) => store.projects);
  console.log(getStatus);
  return (
    <div
      className={`project-details ${!showProjectMobile ? "hide-mobile" : ""}`}
      id={currentProject?.id}
    >
      {getStatus === "loading" ? (
        <Spinner />
      ) : currentProject ? (
        <>
          <ProjectDetailsHeader />
          <div className="project-scroller">
            <ProjectMenuFilter />
            {showProjectTask === "task" && <ProjectTasksList />}
            {showProjectTask === "detail" && <ProjectDetail />}
          </div>
        </>
      ) : (
        !currentProject && (
          <NoSelectedItem>
            <h3>Projects</h3>
            <p>No project were selected on this page</p>
          </NoSelectedItem>
        )
      )}
    </div>
  );
}

export default ProjectDetails;
