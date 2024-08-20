import ProjectBudgetInfo from "./ProjectBudgetInfo";
import ProjectNotes from "./ProjectNotes";

function ProjectDetail() {
  return (
    <div className="project-detail-container">
      <div className="detail-box">
        <span className="detail-tag">Details</span>
        <ProjectBudgetInfo />
      </div>
      <div className="detail-box">
        <span className="detail-tag">Description</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
          dolorum cumque mollitia qui id maxime? Optio, quisquam quia eligendi
          nam asperiores porro distinctio harum ex ullam cum neque quam sunt!
        </p>
      </div>
      <div className="detail-box">
        <span className="detail-tag">Progress</span>
        <div className="progress-box">
          <span>Tasks (8/24)</span>
          <div className="progress-bar">
            <div className="progress"></div>
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
