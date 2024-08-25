import { useDispatch, useSelector } from "react-redux";
import { useApp } from "../../contexts/AppProvider";
import Overlay from "../../ui/Overlay";
import ProjectForm from "../../ui/ProjectForm";
import TaskForm from "../../ui/TaskForm";
import ProjectGrid from "./ProjectGrid";
import ProjectsHeader from "./ProjectsHeader";
import { useEffect } from "react";
import { getProjectsData } from "./projectSlice";

function ProjectsLayout() {
  const { showProjectForm, showTaskForm } = useApp();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProjectsData());
  }, []);
  return (
    <section className="project-section">
      {/* <div>
        <ProjectsHeader />
      </div> */}
      {showProjectForm && (
        <Overlay>
          <ProjectForm />
        </Overlay>
      )}

      {showTaskForm && (
        <Overlay>
          <TaskForm />
        </Overlay>
      )}
      <ProjectGrid />
    </section>
  );
}

export default ProjectsLayout;
