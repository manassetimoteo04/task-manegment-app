import { useEffect } from "react";
import ProjectTaskItem from "./ProjectTaskItem";
import { useDispatch, useSelector } from "react-redux";
import { gettingProjectTasks } from "../tasks/taskSlice";
import ListEmpty from "../../ui/ListEmpty";
import PaginationBox from "../../ui/PaginationBox";
function ProjectTasksList() {
  const dispatch = useDispatch();
  const { currentProject } = useSelector((state) => state.projects);
  const { projectTasks } = useSelector((state) => state.tasks);
  useEffect(() => {
    dispatch(gettingProjectTasks(currentProject?.id));
  }, [currentProject?.id]);
  return (
    <>
      {projectTasks?.length > 0 ? (
        <div className="project-tasks-list">
          <div className="container">
            <header className="task-list-header">
              <span></span>
              <span>Task</span>
              <span>Status</span>
              <span>Asignee</span>
              <span>Tags</span>
              <span></span>
            </header>
            <div className="task-grid-list">
              {projectTasks.map((task) => (
                <ProjectTaskItem task={task} key={task.id} />
              ))}
            </div>
          </div>
          <PaginationBox />
        </div>
      ) : (
        <ListEmpty>Adicione uma tarefa</ListEmpty>
      )}
    </>
  );
}

export default ProjectTasksList;
