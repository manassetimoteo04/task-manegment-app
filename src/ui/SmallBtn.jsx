import { Plus } from "react-feather";

function SmallBn({ onClick }) {
  return (
    <button className="btn-create-team" onClick={onClick}>
      <Plus size={20} />
    </button>
  );
}

export default SmallBn;
