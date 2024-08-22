import { Plus } from "react-feather";
import { useApp } from "../../contexts/AppProvider";
import Button from "../../ui/Button";

function TasksHeader() {
  const { dispatch } = useApp();
  return (
    <header className="section-header">
      <div>
        <h2>Your Tasks</h2>
        <span className="main-tag">Tou have 234 Tasks </span>
      </div>
    </header>
  );
}

export default TasksHeader;
