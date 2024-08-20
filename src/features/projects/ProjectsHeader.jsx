import { Plus } from "react-feather";
import { useApp } from "../../contexts/AppProvider";
import Button from "../../ui/Button";

function ProjectsHeader() {
  const { dispatch } = useApp();
  return (
    <header className="section-header">
      <div>
        <h2>Projects</h2>
        <span className="main-tag">Tou have 4 Projects</span>
      </div>
      <Button
        onClick={() => {
          dispatch({ type: "project/toggleForm" });
        }}
        type="primary"
      >
        <Plus /> Add
      </Button>
    </header>
  );
}

export default ProjectsHeader;
