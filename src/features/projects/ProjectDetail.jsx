import { useSelector } from "react-redux";
import ProjectBudgetInfo from "./ProjectBudgetInfo";
import ProjectNotes from "./ProjectNotes";
import { useEffect, useState } from "react";
import {
  getProjectImageName,
  getTeamImageName,
} from "../../services/apiHelpers";

function ProjectDetail() {
  const { currentProject } = useSelector((state) => state.projects);
  const { projectTasks } = useSelector((state) => state.tasks);
  const completed = projectTasks?.filter((task) => task.status === "done");
  const [team, setTeam] = useState({});
  useEffect(() => {
    async function getTeam() {
      const res = await getTeamImageName(currentProject.team_id);
      setTeam(res);
    }
    getTeam();
  }, []);
  console.log(team);
  return (
    <div className="project-detail-container">
      <div className="detail-box">
        <span className="detail-tag">Details</span>
        <ProjectBudgetInfo currentProject={currentProject} />
      </div>
      <div className="detail-box">
        <span className="detail-tag">Description</span>
        <p>{currentProject.description}</p>
      </div>
      <div className="detail-box">
        <span className="detail-tag">Progress</span>
        <div className="progress-box">
          <span>
            Tasks ({completed.length}/{projectTasks.length})
          </span>
          <div className="progress-bar">
            <div
              className="progress"
              style={{
                width: `${(completed.length / projectTasks.length) * 100}%`,
              }}
            ></div>
          </div>
        </div>
      </div>
      <div className="detail-box">
        <span className="detail-tag">Team</span>
        <div className="detail-team-box">
          <span>{team.name}</span>
          <div>
            <img src={team.image} alt={team.name} />
          </div>
        </div>
      </div>

      <div className="detail-box">
        <span className="detail-tag">Notes</span>
        <ProjectNotes />
      </div>
    </div>
  );
}

export default ProjectDetail;
