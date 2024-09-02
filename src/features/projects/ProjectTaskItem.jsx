import { MoreVertical, Square } from "react-feather";
import { useApp } from "../../contexts/AppProvider";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentTask } from "../tasks/taskSlice";
import { useEffect, useState } from "react";
import { getUserImageName } from "../../services/apiHelpers";
import { useGetUserImg } from "../../hooks/useGetUserImg";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

function ProjectTaskItem({ task }) {
  const { title, responsable_id: enganged, status, description, id } = task;
  const [responsale] = useGetUserImg(enganged);
  const location = useLocation();
  return (
    <div className="project-task-item">
      <span className="center-align">
        <Square />
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
