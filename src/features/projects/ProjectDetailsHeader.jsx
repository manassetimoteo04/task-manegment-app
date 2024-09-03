import { ArrowLeft, Plus } from "react-feather";
import Status from "../../ui/Status";
import Button from "../../ui/Button";
import { useApp } from "../../contexts/AppProvider";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";
function ProjectDetailsHeader() {
  const { dispatch, setShowProjectMobile } = useApp();
  const { currentProject } = useSelector((state) => state.projects);
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="project-details-header">
      <div className="project-name-detail">
        <button
          className="project-detail-back-btn"
          onClick={() => setShowProjectMobile(false)}
        >
          <ArrowLeft />
        </button>
        <img src={currentProject?.image} alt={currentProject?.image} />
        <h3>{currentProject?.name} </h3>
      </div>
      <div className="project-team-box">
        <Button
          type="secondary"
          onClick={() => {
            navigate(`${location.search}#newtask`);
          }}
        >
          <Plus size={18} /> Task
        </Button>
      </div>
    </div>
  );
}

export default ProjectDetailsHeader;
