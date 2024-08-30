import { useState } from "react";
import ProjectFilter from "./ProjectFilter";
import ProjectListBox from "./ProjectListBox";
import ProjectSearchBar from "./ProjectSearchBar";
import ProjectsHeader from "./ProjectsHeader";
import { useApp } from "../../contexts/AppProvider";

function ProjectsList() {
  const { showProjectMobile } = useApp();
  return (
    <div className={`projects-list ${showProjectMobile ? "hide-mobile" : ""}`}>
      <ProjectsHeader />
      <ProjectFilter />
      <ProjectListBox />
    </div>
  );
}

export default ProjectsList;
