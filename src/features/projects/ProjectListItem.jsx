import { useDispatch, useSelector } from "react-redux";
import { getCurrProject } from "./projectSlice";

function ProjectListItem({ project }) {
  const { name, image, due_date: dueDate } = project;
  const dispatch = useDispatch();
  const { currentProject } = useSelector((state) => state.projects);
  function handleClick() {
    dispatch(getCurrProject(project.id));
  }

  return (
    <li
      className={currentProject.id === project.id ? "active" : ""}
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
