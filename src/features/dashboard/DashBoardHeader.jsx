import { Plus } from "react-feather";
import Button from "../../ui/Button";
import { useApp } from "../../contexts/AppProvider";
import { useNavigate } from "react-router";

function DashBoardHeader() {
  const { dispatch } = useApp();
  const navigate = useNavigate();
  return (
    <header className="section-header">
      <div>
        <h2>Dashboard</h2>
        <span className="main-tag">Tou have 4 Projects</span>
      </div>
      <Button
        onClick={() => {
          navigate("#newproject");
        }}
        type="primary"
      >
        <Plus /> Add
      </Button>
    </header>
  );
}

export default DashBoardHeader;
