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
  const { teams, status } = useSelector((state) => state.teams);
  const DISPATCH = useDispatch();
  const refEl = useRef();
  let ref = useRef(0);
  useEffect(() => {
    if (status.statu === "succeeded" && status.type === "getAll") {
      const ids = teams.map((team) => team.id);
      DISPATCH(getProjectsData(ids));
    }
  }, [status.statu]);

  useEffect(() => {
    ref.current++;
    if (!refEl.current) return;
    const event = (e) => {
      const target = e.target.closest(".project-form");
      if (target) return;
      showProjectForm && DISPATCH({ type: "project/closeProjectForm" });
    };

    document.addEventListener("click", event);
    return () => document.removeEventListener("click", event);
  }, []);
  return (
    <section className="project-section">
      <ProjectGrid />
    </section>
  );
}

export default ProjectsLayout;
