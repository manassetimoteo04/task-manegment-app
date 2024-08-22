import { FolderMinus, Clipboard, Users, Calendar } from "react-feather";

function DashBoardSummary() {
  return (
    <div className="dashboard-summary">
      <div className="summary-box">
        <span className="icon blue">
          <Users size={50} />
        </span>
        <div>
          <span className="summ-tag">Teams</span>
          <span className="total-summ">545</span>
        </div>
      </div>
      <div className="summary-box">
        <span className="icon yellow">
          <FolderMinus size={50} />
        </span>
        <div>
          <span className="summ-tag">Projects</span>
          <span className="total-summ">234</span>
        </div>
      </div>
      <div className="summary-box">
        <span className="icon orange">
          <Clipboard size={50} />
        </span>
        <div>
          <span className="summ-tag">Tasks</span>
          <span className="total-summ">234</span>
        </div>
      </div>
      <div className="summary-box">
        <span className="icon pink">
          <Calendar size={50} />
        </span>
        <div>
          <span className="summ-tag">Today's Tasks</span>
          <span className="total-summ">234</span>
        </div>
      </div>
    </div>
  );
}

export default DashBoardSummary;
