import { useSelector } from "react-redux";
import ProjectBudgetInfo from "./ProjectBudgetInfo";
import ProjectNotes from "./ProjectNotes";

function ProjectDetail() {
  const { currentProject } = useSelector((state) => state.projects);
  const { projectTasks } = useSelector((state) => state.tasks);
  const completed = projectTasks?.filter((task) => task.status === "finished");
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
          <span>Duxica</span>
          <div>
            <img src="me.jpg" alt="" />
            <img src="file.png" alt="" />
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
