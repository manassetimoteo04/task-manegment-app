import { useDispatch, useSelector } from "react-redux";
import { useApp } from "../../contexts/AppProvider";
import Overlay from "../../ui/Overlay";
import ProjectForm from "../../ui/ProjectForm";
import TaskForm from "../../ui/TaskForm";
import ProjectGrid from "./ProjectGrid";
import ProjectsHeader from "./ProjectsHeader";
import { useEffect, useRef } from "react";
import { getProjectsData } from "./projectSlice";
import TaskDetails from "../tasks/TaskDetails";

function ProjectsLayout() {
  const { showTaskDetail, showProjectForm, showTaskForm } = useApp();
  const dispatch = useDispatch();
  const refEl = useRef();
  useEffect(() => {
    dispatch(getProjectsData());
  }, []);

  useEffect(() => {
    console.log(refEl);
    if (!refEl.current) return;
    const event = (e) => {
      const target = e.target.closest(".project-form");
      if (target) return;
      // showProjectForm && dispatch({ type: "project/closeProjectForm" });
    };

    refEl.current.addEventListener("click", event);
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
      {showTaskDetail && <TaskDetails />}

      <ProjectGrid />
    </section>
  );
}

export default ProjectsLayout;
