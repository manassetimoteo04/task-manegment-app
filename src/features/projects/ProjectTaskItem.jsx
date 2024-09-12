import { Check, MoreVertical, Square } from "react-feather";
import { useApp } from "../../contexts/AppProvider";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentTask, updateTaskStatus } from "../tasks/taskSlice";
import { useEffect, useState } from "react";
import { getUserImageName } from "../../services/apiHelpers";
import { useGetUserImg } from "../../hooks/useGetUserImg";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { useShowPopup } from "../../hooks/useShowPopup";

function ProjectTaskItem({ task }) {
  const { title, responsable_id: enganged, status, description, id } = task;
  const [responsale] = useGetUserImg(enganged);
  const location = useLocation();
  const DISPATCH = useDispatch();
  const [showPopup] = useShowPopup();
  const { status: taskStatus } = useSelector((state) => state.tasks);
  const isCompleted = status === "done";
  function handleClick() {
    DISPATCH(
      updateTaskStatus({ id: id, value: isCompleted ? "pending" : "done" })
    );
  }
  useEffect(() => {
    if (taskStatus.type === "updateStatus" && taskStatus.statu === "succeeded")
      showPopup({
        type: "success",
        message: "Task status updated successfully",
      });
    if (taskStatus.type === "updateStatus" && taskStatus.statu === "failed")
      showPopup({ type: "error", message: "Ups, failed to update status" });
  }, [taskStatus.statu]);
  return (
    <div className="project-task-item">
      <span className="center-align">
        <button
          className={`btn-check-complete ${isCompleted ? "active" : ""}`}
          onClick={handleClick}
        >
          {isCompleted && <Check size={15} />}
        </button>
      </span>
      <span>{title}</span>
      <span>{status}</span>
      <span>
        <img
          className="img-task"
          src={responsale.avatar ? responsale.avatar : "default-user.jpg"}
          alt=""
        />
      </span>
      <span>{description}</span>
      <span className="center-align">
        <Link to={`${location.search}#task/${id}`}>
          <MoreVertical />
        </Link>
      </span>
    </div>
  );
}

export default ProjectTaskItem;
