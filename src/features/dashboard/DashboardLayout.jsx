import { useApp } from "../../contexts/AppProvider";
import Overlay from "../../ui/Overlay";
import ProjectForm from "../../ui/ProjectForm";
import DashBoardCalendar from "./DashBoardCalendar";
import DashBoardGrid from "./DashBoardGrid";
import DashBoardHeader from "./DashBoardHeader";
import DashBoardProjectsList from "./DashBoardProjectsList";
import DashBoardSummary from "./DashBoardSummary";

function DashboardLayout() {
  const { showProjectForm } = useApp();
  return (
    <section className="dashboard-section">
      <div>
        <DashBoardHeader />
        {/* <DashBoardProjectsList /> */}
        <DashBoardSummary />
      </div>
      <DashBoardGrid />
      {showProjectForm && (
        <Overlay>
          <ProjectForm />
        </Overlay>
      )}
    </section>
  );
}

export default DashboardLayout;
