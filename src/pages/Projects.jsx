import { useEffect } from "react";
import ProjectsLayout from "../features/projects/ProjectsLayout";

function Projects() {
  useEffect(() => {
    document.title = "Projects | See your Projects";
  }, []);
  return (
    <main>
      <ProjectsLayout />
    </main>
  );
}

export default Projects;
