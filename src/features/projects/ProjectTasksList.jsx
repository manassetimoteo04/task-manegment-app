import ProjectTaskItem from "./ProjectTaskItem";

function ProjectTasksList() {
  return (
    <div className="project-tasks-list">
      <header className="task-list-header">
        <span></span>
        <span>Task</span>
        <span>Status</span>
        <span>Asignee</span>
        <span>Tags</span>
        <span></span>
      </header>
      <div className="task-grid-list">
        <ProjectTaskItem />
        <ProjectTaskItem />
        <ProjectTaskItem />
      </div>
    </div>
  );
}

export default ProjectTasksList;
