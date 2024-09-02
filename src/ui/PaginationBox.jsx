import { ChevronLeft, ChevronRight } from "react-feather";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../utils/constants";

function PaginationBox({ count }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = !searchParams.get("page") ? 1 : +searchParams.get("page");
  const pageCount = Math.ceil(count / PAGE_SIZE);
  function handlePrev() {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;
    searchParams.set("page", prev);
    setSearchParams(searchParams);
  }
  function handleNext() {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;

    setSearchParams("page", next);
    searchParams.set("page", next);
    setSearchParams(searchParams);
  }
  return (
    <div className="pagination-box">
      <button
        onClick={handlePrev}
        className={currentPage === 1 ? "disabled" : ""}
      >
        <ChevronLeft size={18} />
      </button>
      <span>{currentPage}</span>
      <button
        onClick={handleNext}
        className={currentPage === pageCount ? "disabled" : ""}
      >
        <ChevronRight size={18} />
      </button>
    </div>
  );
}

export default PaginationBox;
