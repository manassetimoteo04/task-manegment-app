import { Moon, Sun } from "react-feather";
import { useApp } from "../contexts/AppProvider";

function DarkModeToggle() {
  const { showSideBar } = useApp();
  return (
    <>
      {showSideBar && (
        <div className="container-dark-mode">
          <button>
            <Sun size={20} /> Light
          </button>
          <button className="active">
            <Moon size={20} /> Dark
          </button>
        </div>
      )}
    </>
  );
}

export default DarkModeToggle;
