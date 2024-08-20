import { Calendar, DollarSign } from "react-feather";

function ProjectBudgetInfo() {
  return (
    <div className="detail-grid">
      <div className="detail">
        <span className="icon">
          <DollarSign />
        </span>
        <div className="detail-content">
          <span>Budget</span>
          <span className="content-inf">2,000,000</span>
        </div>
      </div>
      <div className="detail">
        <span className="icon">
          <Calendar />
        </span>
        <div className="detail-content">
          <span>Start Date</span>
          <span className="content-inf">12 Ago, 2024</span>
        </div>
      </div>
      <div className="detail">
        <span className="icon">
          <Calendar />
        </span>
        <div className="detail-content">
          <span>End Date</span>
          <span className="content-inf">20 Out, 2024</span>
        </div>
      </div>
    </div>
  );
}

export default ProjectBudgetInfo;
