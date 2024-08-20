import { Search } from "react-feather";

function SearchBar() {
  return (
    <form className="search-form">
      <Search />
      <input type="text" placeholder="Find your Tasks, Projects..." />
    </form>
  );
}

export default SearchBar;
