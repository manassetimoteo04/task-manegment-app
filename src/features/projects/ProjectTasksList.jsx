import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import ProjectTaskItem from "./ProjectTaskItem";
import { useDispatch, useSelector } from "react-redux";
import { gettingProjectTasks } from "../tasks/taskSlice";
import ListEmpty from "../../ui/ListEmpty";
import PaginationBox from "../../ui/PaginationBox";
import FilterBox from "../../ui/FilterBox";
import TableSekeletonLoading from "../../ui/TableSekeletonLoading";
function ProjectTasksList() {
  const dispatch = useDispatch();

  const [searchParams] = useSearchParams();
  const { currentProject } = useSelector((state) => state.projects);
  const {
    projectTasks,
    projectCount: count,
    status,
    isLoading,
  } = useSelector((state) => state.tasks);

  const page = searchParams.get("page") ? +searchParams.get("page") : 1;
  useEffect(() => {
    dispatch(gettingProjectTasks({ projectId: currentProject?.id, page }));
  }, [currentProject?.id, page]);

  return (
    <>
      <div className="project-tasks-list">
        <FilterBox />
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
            {projectTasks.length > 0 ? (
              <>
                {!isLoading &&
                  projectTasks.map((task) => (
                    <ProjectTaskItem task={task} key={task.id} />
                  ))}
                {isLoading && <TableSekeletonLoading />}
              </>
            ) : (
              <ListEmpty>Adicione uma tarefa</ListEmpty>
            )}
          </div>
        </div>
        {count > projectTasks.length && <PaginationBox count={count} />}
      </div>
    </>
  );
}

export default ProjectTasksList;
