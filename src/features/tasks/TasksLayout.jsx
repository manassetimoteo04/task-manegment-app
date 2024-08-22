import { Outlet } from "react-router";
import TaskDetails from "./TaskDetails";
import TasksFilter from "./TasksFilter";
import TasksHeader from "./TasksHeader";
import TasksTable from "./TasksTable";
import { useApp } from "../../contexts/AppProvider";

function TasksLayout() {
  const { showTaskDetail } = useApp();
  return (
    <section className="tasks-section">
      <TasksHeader />
      <TasksTable />
      {showTaskDetail && <TaskDetails />}
      {/* <Outlet /> */}
    </section>
  );
}

export default TasksLayout;
