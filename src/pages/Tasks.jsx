import { useEffect } from "react";
import TasksLayout from "../features/tasks/TasksLayout";

function Tasks() {
  useEffect(() => {
    document.title = "Tasks | All Tasks";
  }, []);
  return (
    <main>
      <TasksLayout />
    </main>
  );
}

export default Tasks;
