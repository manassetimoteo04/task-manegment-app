import { ChevronLeft, ChevronRight } from "react-feather";

function PaginationBox() {
  return (
    <div className="pagination-box">
      <button>
        <ChevronLeft size={18} />
      </button>
      <span>01</span>
      <button>
        <ChevronRight size={18} />
      </button>
    </div>
  );
}

export default PaginationBox;
