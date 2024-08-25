import { Plus, X } from "react-feather";
import Button from "./Button";
import { useEffect, useState } from "react";
import { useApp } from "../contexts/AppProvider";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { createProject } from "../features/projects/projectSlice";
import ButtonSpinner from "./ButtonSpinner";

// .dark-mode {
//   --primary-color-blue: #4361ee;
//   --secondary-color-blue: #99aaf5;
//   --primary-color-red: #ff6868;
//   --dark-grey-heading-01: #f0f1f5 --less-dark-grey-heading-02: #d7d9e3;
//   --primary-text-color: #fafafa;
//   --secondary-text-color: #b3b6c4;
//   --bg-divider-color: #2c2f41;
//   --background-color: #242630;
//   --btn-border-radius: 1rem;
//   --box-border-radius: 1.2rem;
//   --border-color: #d3d3d31e;
//   --sucess-color: #43b943;
//   --main-gradient: linear-gradient(to top left, #9aaaf5, #4361ee)
// }

function ProjectForm() {
  const [name, setName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [teamName, setTeamName] = useState("");
  const [description, setDescription] = useState();
  const [image, setImage] = useState("");
  const { status } = useSelector((state) => state.projects);
  const options = [
    {
      value: "chocolate",
      label: "Chocolate",
      icon: "me.jpg",
    },
    {
      value: "strawberry",
      label: "Strawberry",
      icon: "file.png",
    },
    { value: "vanilla", label: "Vanilla", icon: "file.png" },
  ];

  const { dispatch } = useApp();
  const DISPATCH = useDispatch();
  async function handleSubmit(e) {
    e.preventDefault();

    const newProject = {
      name,
      startDate: new Date(startDate).toISOString(),
      dueDate: new Date(dueDate).toISOString(),
      teamName: teamName.value,
      description,
      image,
    };
    DISPATCH(createProject(newProject));
  }
  useEffect(() => {
    if (status === "succeeded") dispatch({ type: "project/toggleForm" });
  }, [status]);
  return (
    <form className="project-form" onSubmit={handleSubmit}>
      <div className="form-action">
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
            type="date"
            id="startDate"
            placeholder="Set Start Date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="dueDate">Due Date</label>
          <input
            type="date"
            id="dueDate"
            placeholder="Set Due Date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="selectTeam">Select Team</label>
        <Select
          options={options}
          components={{ Option: CustomOption }}
          value={teamName}
          onChange={(e) => setTeamName(e)}
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
      <div className="form-group">
        <label htmlFor="image">Upload Image</label>
        <input
          type="file"
          name=""
          id="image"
          files={image}
          onChange={(e) => setImage(e.target.files[0])}
          accept="image/*"
        />
      </div>
      <Button type="secondary" disabled={status === "loading" ? true : false}>
        {status === "loading" ? <ButtonSpinner /> : "save"}
      </Button>
    </form>
  );
}
const CustomOption = (props) => {
  const { data, innerRef, innerProps } = props;

  return (
    <div
      ref={innerRef}
      {...innerProps}
      style={{
        display: "flex",
        alignItems: "center",
        padding: "10px",
      }}
      className="customOption"
    >
      <img
        src={data.icon}
        alt={data.label}
        style={{ width: 20, height: 20, marginRight: 10 }}
      />
      {data.label}
    </div>
  );
};
export default ProjectForm;
