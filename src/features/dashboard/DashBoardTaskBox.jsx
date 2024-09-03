import { ChevronDown } from "react-feather";
import Status from "../../ui/Status";
import { useEffect, useState } from "react";
import { useGetUserImg } from "../../hooks/useGetUserImg";
import { Link, useNavigate } from "react-router-dom";

function DashBoardTaskBox({ task }) {
  const { id, title, status, priority, responsable_id } = task;
  const [user] = useGetUserImg(responsable_id);
  const navigate = useNavigate();
  return (
    <div className="task-box" onClick={() => navigate(`#task/${id}`)}>
      <span className="task-icon">
        <ChevronDown />
      </span>
      <span className="task-name">{title}</span>
      <span className="no-mobile">Today</span>
      <Status type="progress">{status}</Status>
      <span className="img-enganged">
        <img src={user?.avatar ? user?.avatar : "default-user.jpg"} alt="" />
      </span>
      <span className="no-mobile">{priority}</span>
    </div>
  );
}

export default DashBoardTaskBox;
