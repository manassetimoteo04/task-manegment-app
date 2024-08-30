import { Menu } from "react-feather";
import DateHeader from "./DateHeader";
import NotificationBox from "./NotificationBox";
import SearchBar from "./SearchBar";
import UserBox from "./UserBox";
import { useApp } from "../contexts/AppProvider";

function Header() {
  const { dispatch } = useApp();
  return (
    <header className="main-header" style={{ justifyContent: "space-between" }}>
      <button
        className="btn-toggle-menu"
        onClick={() => dispatch({ type: "app/showSideBar" })}
      >
        <Menu />
      </button>
      <SearchBar />
      <NotificationBox />
    </header>
  );
}

export default Header;
