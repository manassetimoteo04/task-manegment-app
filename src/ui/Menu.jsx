import NavList from "./NavList";
import UserBox from "./UserBox";
import TeamList from "./TeamList";
import General from "./General";
import DarkModeToggle from "./DarkModeToggle";
import { ChevronsLeft, ChevronsRight, X } from "react-feather";
import { useApp } from "../contexts/AppProvider";
import Logo from "./Logo";
function Menu() {
  const { showSideBar, dispatch } = useApp();
  return (
    <menu>
      <button
        className="show-side"
        onClick={() => dispatch({ type: "app/showSideBar" })}
      >
        {!showSideBar && <ChevronsRight size={20} />}
        {showSideBar && <X size={18} />}
      </button>
      <Logo />
      <div className="scroller-menu">
        <NavList />
        <General />
        <TeamList />
        <DarkModeToggle />
      </div>
    </menu>
  );
}

export default Menu;
