import { ChevronDown } from "react-feather";
import Status from "../../ui/Status";
import { useEffect, useState } from "react";
import { useGetUserImg } from "../../hooks/useGetUserImg";
import { Link } from "react-router-dom";

function DashBoardTaskBox({ task }) {
  const { id, title, status, priority, responsable_id } = task;
  const [user] = useGetUserImg(responsable_id);

  return (
    <Link to={`#task/${id}`} className="task-box">
      <span className="task-icon">
        <ChevronDown />
      </span>
      <span className="task-name">{title}</span>
      <span className="no-mobile">Today</span>
      <Status type="progress">{status}</Status>
      <span className="img-enganged">
        <img src={user?.avatar} alt="" />
      </span>
      <span className="no-mobile">{priority}</span>
    </Link>
  );
}

export default DashBoardTaskBox;
