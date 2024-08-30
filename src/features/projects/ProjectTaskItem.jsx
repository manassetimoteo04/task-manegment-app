import { MoreVertical, Square } from "react-feather";
import { useApp } from "../../contexts/AppProvider";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentTask } from "../tasks/taskSlice";
import { useEffect, useState } from "react";
import { getUserImageName } from "../../services/apiHelpers";
import { useGetUserImg } from "../../hooks/useGetUserImg";

function ProjectTaskItem({ task }) {
  const { title, responsable_id: enganged, priority, description, id } = task;
  const { dispatch } = useApp();
  const [responsale] = useGetUserImg(enganged);
  const DISPATCH = useDispatch();
  function handleClick() {
    dispatch({ type: "task/toggleDetail" });
    DISPATCH(getCurrentTask(id));
  }
  // useEffect(() => {
  //   async function getUser() {
  //     const data = await getUserImageName(enganged);
  //     setResponsable(data);
  //   }
  //   getUser();
  // }, []);
  console.log(responsale);
  return (
    <div className="project-task-item">
      <span className="center-align">
        <Square />
      </span>
      <span>{title}</span>
      <span>{priority}</span>
      <span>
        <img
          className="img-task"
          src={responsale.avatar ? responsale.avatar : "default-user.jpg"}
          alt=""
        />
      </span>
      <span>{description}</span>
      <span className="center-align" onClick={handleClick}>
        <MoreVertical />
      </span>
    </div>
  );
}

export default ProjectTaskItem;
