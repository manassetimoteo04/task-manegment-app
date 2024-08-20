function ProjectListBox() {
  return (
    <ul className="project-list-box">
      <li className="active">
        <img src="me.jpg" alt="" />
        <div className="project-content">
          <h4>Tiamu Project</h4>
          <span>Deadline: 12 Ago 2024 </span>
        </div>
      </li>{" "}
      <li>
        <img src="me.jpg" alt="" />
        <div className="project-content">
          <h4>Tiamu Project</h4>
          <span>Deadline: 12 Ago 2024 </span>
        </div>
      </li>{" "}
    </ul>
  );
}

export default ProjectListBox;
