import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

function FilterBox() {
  return (
    <div className="filter-box-table">
      <div>
        <FilterButton type="all">All</FilterButton>
        <FilterButton type="pending">Pending</FilterButton>
        <FilterButton type="doing">Doing</FilterButton>
        <FilterButton type="done">Done</FilterButton>
      </div>
    </div>
  );
}
function FilterButton({ type, children }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isActive, setIsActive] = useState(false);
  function handleAddParam(param) {
    searchParams.set("filter", param);
    setSearchParams(searchParams);
  }
  useEffect(() => {
    const filter = searchParams.get("filter");

    if (filter === type) {
      setIsActive(true);
    } else if (!filter && type === "all") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [searchParams, type]);
  return (
    <button
      className={isActive ? "active" : ""}
      onClick={() => handleAddParam(type)}
    >
      {children}
    </button>
  );
}
export default FilterBox;
