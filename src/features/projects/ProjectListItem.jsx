import { useDispatch, useSelector } from "react-redux";
import { getCurrProject } from "./projectSlice";
import { useApp } from "../../contexts/AppProvider";

function ProjectListItem({ project }) {
  const { name, image, due_date: dueDate } = project;
  const DISPATCH = useDispatch();
  const { currentProject } = useSelector((state) => state.projects);
  const { setShowProjectMobile } = useApp();
  function handleClick() {
    DISPATCH(getCurrProject(project.id));
    setShowProjectMobile(true);
  }

  return (
    <li
      className={currentProject?.id === project?.id ? "active" : ""}
      onClick={handleClick}
    >
      <img src={image} alt={name} />
      <div className="project-content">
        <h4>{name}</h4>
        <span>Deadline: {dueDate} </span>
      </div>
    </li>
  );
}

export default ProjectListItem;
