import { Calendar, DollarSign } from "react-feather";

function ProjectBudgetInfo({ currentProject }) {
  return (
    <div className="detail-grid">
      <div className="detail">
        <span className="icon">
          <DollarSign />
        </span>
        <div className="detail-content">
          <span>Budget</span>
          <span className="content-inf">{currentProject.budget}</span>
        </div>
      </div>
      <div className="detail">
        <span className="icon">
          <Calendar />
        </span>
        <div className="detail-content">
          <span>Start Date</span>
          <span className="content-inf">{currentProject.start_date}</span>
        </div>
      </div>
      <div className="detail">
        <span className="icon">
          <Calendar />
        </span>

        <div className="detail-content">
          <span>End Date</span>
          <span className="content-inf">{currentProject.due_date}</span>
        </div>
      </div>
    </div>
  );
}

export default ProjectBudgetInfo;
