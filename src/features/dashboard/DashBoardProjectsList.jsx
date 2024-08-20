import ProjectCard from "./ProjectCard";

function DashBoardProjectsList() {
  return (
    <div className="dashboard-project-list">
      {Array.from({ length: 3 }, (_, i) => (
        <ProjectCard />
      ))}
    </div>
  );
}

export default DashBoardProjectsList;
