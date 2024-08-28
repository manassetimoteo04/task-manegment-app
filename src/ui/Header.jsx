import DateHeader from "./DateHeader";
import NotificationBox from "./NotificationBox";
import SearchBar from "./SearchBar";
import UserBox from "./UserBox";

function Header() {
  return (
    <header className="main-header">
      <SearchBar />
      {/* <DateHeader /> */}
      <UserBox />
      <NotificationBox />
    </header>
  );
}

export default Header;
