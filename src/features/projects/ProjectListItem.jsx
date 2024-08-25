// created_at: "2024-08-22T14:20:56+00:00";
// created_by: "asdasd";
// description: "234234";
// due_date: null;
// id: "4ce56938-84ec-4793-b3b8-3766427fd870";
// image: null;
// name: "Test";
// start_date: null;
// tasks: (4)[("1", "2", "3", "4")];
// team_id: "234234";

import { useDispatch } from "react-redux";
import { getCurrProject } from "./projectSlice";

function ProjectListItem({ project }) {
  const { name, image, due_date: dueDate } = project;
  const dispatch = useDispatch();
  function handleClick() {
    dispatch(getCurrProject(project.id));
  }

  return (
    <li className="" onClick={handleClick}>
      <img src={image} alt={name} />
      <div className="project-content">
        <h4>{name}</h4>
        <span>Deadline: {dueDate} </span>
      </div>
    </li>
  );
}

export default ProjectListItem;
