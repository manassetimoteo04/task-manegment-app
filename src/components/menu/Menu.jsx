import NavList from "./NavList";
import UserBox from "./UserBox";
import TeamList from "./TeamList";
import General from "./General";
import DarkModeToggle from "./DarkModeToggle";
import { ChevronsLeft, ChevronsRight } from "react-feather";
import { useApp } from "../../contexts/AppProvider";
function Menu() {
  const { showSideBar, dispatch } = useApp();
  return (
    <menu>
      <button
        className="show-side"
        onClick={() => dispatch({ type: "app/showSideBar" })}
      >
        {!showSideBar && <ChevronsLeft size={20} />}
        {showSideBar && <ChevronsRight size={20} />}
      </button>
      <UserBox />
      <div className="scroller-menu">
        <NavList />
        <TeamList />
        <General />
        <DarkModeToggle />
      </div>
    </menu>
  );
}

export default Menu;
