import { useApp } from "../../contexts/AppProvider";
import Overlay from "../../ui/Overlay";
import ProjectForm from "../../ui/ProjectForm";
import ProjectGrid from "./ProjectGrid";
import ProjectsHeader from "./ProjectsHeader";

function ProjectsLayout() {
  const { showProjectForm } = useApp();
  return (
    <section className="project-section">
      <div>
        <ProjectsHeader />
      </div>
      {showProjectForm && (
        <Overlay>
          <ProjectForm />
        </Overlay>
      )}
      <ProjectGrid />
    </section>
  );
}

export default ProjectsLayout;
