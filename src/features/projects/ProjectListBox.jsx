import { useSelector } from "react-redux";
import ProjectListItem from "./ProjectListItem";
import ListEmpty from "../../ui/ListEmpty";
import Spinner from "../../ui/Spinner";
import ListSkeletonLoading from "../../ui/ListSkeletonLoading";
function ProjectListBox() {
  const { data: projectList, status } = useSelector((store) => store.projects);

  return (
    <ul className="project-list-box">
      {status.statu !== "loading" &&
      status.statu !== "failed" &&
      projectList.length > 0
        ? projectList.map((project) => (
            <ProjectListItem project={project} key={project.id} />
          ))
        : status.statu !== "loading" &&
          status.statu !== "failed" && (
            <ListEmpty>Sem nenhum projecto</ListEmpty>
          )}
      {status.statu === "loading" && <ListSkeletonLoading times={8} />}
    </ul>
  );
}

export default ProjectListBox;
