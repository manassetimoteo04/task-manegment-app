import { Plus, X } from "react-feather";
import Button from "./Button";
import { useState } from "react";
import { useApp } from "../contexts/AppProvider";
import Select from "react-select";
function TaskFrom() {
  const [name, setName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [enganged, setEnganged] = useState("");
  const [description, setDescription] = useState();
  const [priority, setPriority] = useState("");
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
  const optionsPrio = [
    {
      value: "High",
      label: "High",
    },
    {
      value: "Middle",
      label: "Middle",
    },
    { value: "Low", label: "Low" },
  ];
  const { dispatch } = useApp();
  return (
    <form className="project-form">
      <div className="form-action">
        <Button type="secondary">Save</Button>
        <button
          className="btn-close-form"
          onClick={(e) => {
            e.preventDefault();
            dispatch({ type: "task/toggleForm" });
          }}
        >
          <X />
        </button>
      </div>
      <header>
        <h3>Create New Task</h3>
      </header>

      <div className="form-group">
        <label htmlFor="projectName">Task Name</label>
        <input
          type="text"
          id="projectName"
          placeholder="Set task Name"
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
        <label htmlFor="selectTeam">Enganged People</label>

        <Select
          options={options}
          components={{ Option: CustomOption }}
          value={enganged}
          onChange={(e) => setEnganged(e)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="selectTeam">Select Priority</label>

        <Select
          options={optionsPrio}
          value={priority}
          onChange={(e) => setPriority(e)}
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
export default TaskFrom;
