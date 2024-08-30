import { useSelector } from "react-redux";
import ProjectListItem from "./ProjectListItem";
import ListEmpty from "../../ui/ListEmpty";
import Spinner from "../../ui/Spinner";
function ProjectListBox() {
  const { data: projectList, status } = useSelector((store) => store.projects);

  return (
    <ul className="project-list-box">
      {status !== "loading" && status !== "failed" && projectList.length > 0
        ? projectList.map((project) => (
            <ProjectListItem project={project} key={project.id} />
          ))
        : status !== "loading" &&
          status !== "failed" && <ListEmpty>Sem nenhum projecto</ListEmpty>}
      {status === "loading" && <Spinner />}
    </ul>
  );
}

export default ProjectListBox;
