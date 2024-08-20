import DateHeader from "./DateHeader";
import NotificationBox from "./NotificationBox";
import SearchBar from "./SearchBar";

function Header() {
  return (
    <header className="main-header">
      <SearchBar />
      <DateHeader />
      <NotificationBox />
    </header>
  );
}

export default Header;
