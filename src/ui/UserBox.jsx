import { ChevronDown } from "react-feather";
import { useApp } from "../contexts/AppProvider";
import { useSelector } from "react-redux";
function UserBox() {
  const { showSideBar } = useApp();
  const { currentUser } = useSelector((state) => state.auth);
  return (
    <div className="user-box">
      <img
        src={currentUser?.avatar ? currentUser?.avatar : "default-user.jpg"}
        alt=""
      />
      <div className="content-user-box">
        <p className="username">{currentUser?.name}</p>
      </div>
    </div>
  );
}

export default UserBox;
