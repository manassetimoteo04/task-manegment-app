import { MoreVertical } from "react-feather";
import Status from "../../ui/Status";
function ProjectDetailsHeader() {
  return (
    <div className="project-details-header">
      <div className="project-name-detail">
        <img src="me.jpg" alt="" />
        <h3>Project Name</h3>
        <Status type={"progress"}>on progress</Status>
      </div>
      <div className="project-team-box">
        <button>
          <MoreVertical />
        </button>
      </div>
    </div>
  );
}

export default ProjectDetailsHeader;
