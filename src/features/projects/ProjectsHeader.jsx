import { Plus } from "react-feather";
import { useApp } from "../../contexts/AppProvider";
import Button from "../../ui/Button";

function ProjectsHeader() {
  const { dispatch } = useApp();
  return (
    <header className="project-header">
      <div>
        <h2>Projects</h2>
      </div>
      <Button
        onClick={() => {
          dispatch({ type: "project/toggleForm" });
        }}
        type="primary"
      >
        <Plus />
      </Button>
    </header>
  );
}

export default ProjectsHeader;
