import { Folder } from "react-feather";
import { useApp } from "../contexts/AppProvider";

function Logo() {
  const { showSideBar } = useApp();
  return (
    <h1 className="logo">
      <span>
        <Folder size={20} />
      </span>
      {showSideBar && "Task Manager"}
    </h1>
  );
}

export default Logo;
