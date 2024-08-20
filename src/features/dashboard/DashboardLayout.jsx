import { useApp } from "../../contexts/AppProvider";
import Overlay from "../../ui/Overlay";
import ProjectForm from "../../ui/ProjectForm";
import DashBoardCalendar from "./DashBoardCalendar";
import DashBoardHeader from "./DashBoardHeader";
import DashBoardProjectsList from "./DashBoardProjectsList";

function DashboardLayout() {
  const { showProjectForm } = useApp();
  return (
    <section className="dashboard-section">
      <div>
        <DashBoardHeader />
        <DashBoardProjectsList />
      </div>
      <DashBoardCalendar />
      {showProjectForm && (
        <Overlay>
          <ProjectForm />
        </Overlay>
      )}
    </section>
  );
}

export default DashboardLayout;
