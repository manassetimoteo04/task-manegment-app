import { Moon, Sun } from "react-feather";
import { useApp } from "../contexts/AppProvider";

function DarkModeToggle() {
  const { showSideBar, isDarkMode, setIsDarkMode } = useApp();
  return (
    <>
      <div
        className={`container-dark-mode ${
          showSideBar ? "" : "hide-toggle-dark"
        }`}
      >
        <button
          className={!isDarkMode ? "active" : ""}
          onClick={() => setIsDarkMode(false)}
        >
          <Sun size={20} /> {showSideBar && "Light"}
        </button>
        <button
          className={isDarkMode ? "active" : ""}
          onClick={() => setIsDarkMode(true)}
        >
          <Moon size={20} />
          {showSideBar && "Dark"}
        </button>
      </div>
    </>
  );
}

export default DarkModeToggle;
