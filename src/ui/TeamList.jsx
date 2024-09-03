import { useApp } from "../contexts/AppProvider";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTeams } from "../features/teams/teamSlice";
import SmallBtn from "./SmallBtn";
import { useShowPopup } from "../hooks/useShowPopup";
import { useLocation, useNavigate } from "react-router";

function TeamList() {
  const { showSideBar, dispatch } = useApp();
  const { teams, status } = useSelector((state) => state.teams);
  const navigate = useNavigate();
  const location = useLocation();

  const {
    currentUser,
    isLoading,
    error,
    status: authStatus,
  } = useSelector((state) => state.auth);
  const [showPopup] = useShowPopup();
  const DISPATCH = useDispatch();
  useEffect(() => {
    DISPATCH(getAllTeams({ id: currentUser?.id }));
  }, [authStatus.status]);
  useEffect(() => {
    if (error)
      showPopup({
        type: "error",
        message: "Something went wrong, please check your internet conection",
      });
  }, [error]);
  return (
    <div className="menu-team">
      <span className="tag">
        <>
          {showSideBar && "Team"}

          <SmallBtn
            onClick={() => {
              navigate(`${location.search}#newteam`);
            }}
          />
        </>
      </span>

      <ul className="team-list">
        {showSideBar &&
          teams.map((team) => <TeamListItem team={team} key={team.id} />)}
      </ul>
    </div>
  );
}
function TeamListItem({ team }) {
  const navigate = useNavigate();
  const location = useLocation();

  function handleClick() {
    navigate(`${location.search}#team/${team.id}`);
  }
  return (
    <li onClick={handleClick}>
      <span className="team-name">{team.name}</span>
      <div className="users-team">
        <img src={team.image} alt={team.name} />
      </div>
    </li>
  );
}

export default TeamList;
