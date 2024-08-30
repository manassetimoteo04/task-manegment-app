import { useState } from "react";
import { Plus } from "react-feather";

function AddForm({ onSubmit, type, placeholder }) {
  const [value, setValue] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(value);
  }
  return (
    <form onSubmit={handleSubmit} className="add-form">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(E) => setValue(E.target.value)}
      />
      <button>
        <Plus />
      </button>
    </form>
  );
}

export default AddForm;
