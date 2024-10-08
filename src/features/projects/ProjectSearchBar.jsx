import { useState } from "react";
import { Search } from "react-feather";

function ProjectSearchBar() {
  const [query, setQuery] = useState("");

  return (
    <form className="project-search-bar">
      <Search />
      <input
        type="text"
        placeholder="Find your Project"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
}

export default ProjectSearchBar;
