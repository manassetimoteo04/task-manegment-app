import { useEffect, useState } from "react";
import { Search } from "react-feather";

function SearchInput({ setValue, placeholder }) {
  const [query, setQuery] = useState("");
  useEffect(() => {
    setValue(query);
  }, [query]);
  return (
    <form className="search-bar">
      <Search />
      <input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
}

export default SearchInput;
