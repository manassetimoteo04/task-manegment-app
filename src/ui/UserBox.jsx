import { ChevronDown } from "react-feather";
import { useApp } from "../contexts/AppProvider";
function UserBox() {
  const { showSideBar } = useApp();

  return (
    <div className="user-box">
      <img src="me.jpg" alt="" />
      <div className="content-user-box">
        <p className="username">Manasse Timóteo</p>
      </div>
    </div>
  );
}

export default UserBox;
