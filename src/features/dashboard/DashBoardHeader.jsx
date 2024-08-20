import { Plus } from "react-feather";
import Button from "../../ui/Button";
import { useApp } from "../../contexts/AppProvider";

function DashBoardHeader() {
  const { dispatch } = useApp();
  return (
    <header className="section-header">
      <div>
        <h2>Dashboard</h2>
        <span className="main-tag">Tou have 4 Projects</span>
      </div>
      <Button
        onClick={() => {
          dispatch({ type: "project/toggleForm" });
        }}
        type="primary"
      >
        <Plus /> Add
      </Button>
    </header>
  );
}

export default DashBoardHeader;
