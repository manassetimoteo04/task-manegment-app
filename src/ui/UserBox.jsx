import { ChevronDown } from "react-feather";
import { useApp } from "../contexts/AppProvider";
function UserBox() {
  const { showSideBar } = useApp();

  return (
    <div className="user-box">
      <img src="me.jpg" alt="" />
      {showSideBar && (
        <>
          <div className="content-user-box">
            <p className="username">Manasse Timóteo</p>
            <span className="user-tag">Morning, Timóteo</span>
          </div>
          <button className="btn-details">
            <ChevronDown />
          </button>
        </>
      )}
    </div>
  );
}

export default UserBox;
