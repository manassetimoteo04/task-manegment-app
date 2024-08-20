import { Plus, X } from "react-feather";
import Button from "./Button";
import { useState } from "react";
import { useApp } from "../contexts/AppProvider";

function ProjectForm() {
  const [name, setName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [teamName, setTeamName] = useState("");
  const [description, setDescription] = useState();

  const { dispatch } = useApp();
  return (
    <form className="project-form">
      <div className="form-action">
        <Button type="secondary">Save</Button>
        <button
          className="btn-close-form"
          onClick={(e) => {
            e.preventDefault();
            dispatch({ type: "project/toggleForm" });
          }}
        >
          <X />
        </button>
      </div>
      <header>
        <h3>New Project</h3>
        <Button type="tertiary">
          <Plus /> Add Task
        </Button>
      </header>

      <div className="form-group">
        <label htmlFor="projectName">Project Name</label>
        <input
          type="text"
          id="projectName"
          placeholder="Set your project Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-grid-group">
        <div className="form-group">
          <label htmlFor="startDate">Start Date</label>
          <input
            type="text"
            id="startDate"
            placeholder="Set Start Date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="dueDate">Due Date</label>
          <input
            type="text"
            id="dueDate"
            placeholder="Set Due Date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="selectTeam">Select Team</label>
        <input
          type="text"
          id="selectTeam"
          placeholder="Select Team"
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          type="text"
          id="description"
          placeholder="Select Team"
          rows={5}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
    </form>
  );
}

export default ProjectForm;
