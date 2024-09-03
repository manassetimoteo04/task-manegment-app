import { Plus } from "react-feather";

import Button from "../../ui/Button";
import { useLocation, useNavigate } from "react-router";

function ProjectsHeader() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <header className="project-header">
      <div>
        <h2>Projects</h2>
      </div>
      <Button
        onClick={() => {
          navigate(`${location.search}#newproject`);
        }}
        type="primary"
      >
        <Plus />
      </Button>
    </header>
  );
}

export default ProjectsHeader;
