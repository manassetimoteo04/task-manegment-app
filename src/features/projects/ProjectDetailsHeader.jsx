import { Plus } from "react-feather";
import Status from "../../ui/Status";
import Button from "../../ui/Button";
import { useApp } from "../../contexts/AppProvider";
function ProjectDetailsHeader() {
  const { dispatch } = useApp();
  return (
    <div className="project-details-header">
      <div className="project-name-detail">
        <img src="me.jpg" alt="" />
        <h3>Project Name</h3>
        <Status type={"progress"}>on progress</Status>
      </div>
      <div className="project-team-box">
        <Button
          type="secondary"
          onClick={() => dispatch({ type: "task/toggleForm" })}
        >
          <Plus /> Add Task
        </Button>
      </div>
    </div>
  );
}

export default ProjectDetailsHeader;
