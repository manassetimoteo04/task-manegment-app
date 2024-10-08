import { Plus, X } from "react-feather";
import Button from "./Button";
import { useEffect, useState } from "react";
import { useApp } from "../contexts/AppProvider";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { createNewTask } from "../features/tasks/taskSlice";
import { getTeamMembers } from "../features/teams/teamSlice";
import { getUserImageName } from "../services/apiHelpers";
import { useShowPopup } from "../hooks/useShowPopup";
import { useNavigate } from "react-router";

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
const getOptUser = async (id) => {
  const data = await getUserImageName(id);
  return data;
};
function TaskFrom() {
  const [name, setName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [duration, setDuration] = useState("");
  const [enganged, setEnganged] = useState("");
  const [description, setDescription] = useState();
  const [priority, setPriority] = useState("");
  const [options, setOptions] = useState([]);
  const { currentProject } = useSelector((state) => state.projects);
  const { status } = useSelector((state) => state.tasks);
  const { teams } = useSelector((state) => state.teams);
  const DISPATCH = useDispatch();
  const [showPopup] = useShowPopup();
  const navigate = useNavigate();
  const team = teams.find((team) => team.id === currentProject.team_id);

  useEffect(() => {
    async function getT() {
      const opts = await Promise.all(
        team.members.map(async (mem) => {
          const user = await getOptUser(mem);
          return {
            value: user.id,
            label: user.name,
            icon: user.avatar,
          };
        })
      );
      setOptions(opts);
    }
    getT();
  }, []);
  useEffect(() => {
    if (status.type === "create" && status.statu === "loading")
      showPopup({ type: "loading", message: "creating new task" });
    if (status.type === "create" && status.statu === "succeeded") {
      showPopup({ type: "success", message: "new task added" });
      navigate(-1);
    }
    if (status.type === "create" && status.statu === "failed")
      showPopup({ type: "error", message: "Failed creating new task" });
  }, [status.statu]);

  function handleSubmit(e) {
    e.preventDefault();
    const newTask = {
      name,
      startDate,
      startTime,
      duration,
      enganged: enganged.value,
      description,
      priority: priority.value,
      projectId: currentProject.id,
    };
    DISPATCH(createNewTask(newTask));
  }
  const { dispatch } = useApp();
  return (
    <form className="project-form" onSubmit={handleSubmit}>
      <div className="form-action">
        <button
          className="btn-close-form"
          onClick={(e) => {
            e.preventDefault();
            navigate(-1);
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
            type="date"
            id="startDate"
            placeholder="Set Start Date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="dueDate">Start Time</label>
          <input
            type="time"
            id="dueDate"
            placeholder="Set Start Time"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
          />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="dueDate">
          Duration <strong> {duration > 0 ? `(${duration} days)` : ""}</strong>
        </label>
        <input
          type="number"
          id="dueDate"
          placeholder="Set Duration"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="selectTeam">Enganged People</label>

        <Select
          className="select"
          classNamePrefix="select"
          options={options}
          components={{ Option: CustomOption }}
          value={enganged}
          onChange={(e) => setEnganged(e)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="selectTeam">Select Priority</label>

        <Select
          className="select"
          classNamePrefix="select"
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
      <Button type="secondary">Save</Button>
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
        src={data.icon ? data.icon : "default-user.jpg"}
        alt={data.label}
        style={{ width: 20, height: 20, marginRight: 10 }}
      />
      {data.label}
    </div>
  );
};
export default TaskFrom;
