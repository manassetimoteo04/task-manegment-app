import { Calendar } from "react-feather";

function ProjectCard() {
  return (
    <div className="project-box">
      <h3>Crypto Redesign Crypto</h3>
      <div className="project-progress-box">
        <span>
          Progress <span className="percentage">56%</span>
        </span>
        <div className="progress-bar">
          <div className="progress"></div>
        </div>
        <div className="box-footer">
          <div className="users-team">
            <img src="file.png" alt="" />
            <img src="me.jpg" alt="" />
            <img src="file.png" alt="" />
            <img src="me.jpg" alt="" />
          </div>
          <span>
            <Calendar /> 19 Ago
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
