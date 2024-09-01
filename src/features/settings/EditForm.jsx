import { useEffect, useState } from "react";
import { Check, User } from "react-feather";
import { useSelector } from "react-redux";
import { useShowPopup } from "../../hooks/useShowPopup";
function EditForm({ icon, defValue, label, onSubmit, table }) {
  const [value, setValue] = useState("");
  const [showSave, setShowSave] = useState(false);
  const [isActive, setIsActive] = useState(true);
  const { currentUser, status, error } = useSelector((state) => state.auth);
  const [showPopup] = useShowPopup();
  useEffect(() => {
    value !== "" && setIsActive(true);
  }, []);
  function handleSubmit(e) {
    e.preventDefault();
    const data = { table, value, id: currentUser.id };
    onSubmit(data);
    setShowSave(false);
  }

  useEffect(() => {
    if (status.type === "updateUser" && status.statu === "loading")
      showPopup({ type: "loading", message: "Updating information" });
    if (status.type === "updateUser" && status.statu === "succeeded")
      showPopup({ type: "success", message: "User updated successfully" });
    if (status.type === "updateUser" && status.statu === "error")
      showPopup({
        type: "error",
        message: "Failed to update, something went wrong",
      });
  }, [status.statu]);
  useEffect(() => {
    setValue(defValue);
  }, []);
  return (
    <form className="edit-form" onSubmit={handleSubmit}>
      <div className="form-div">
        {icon}
        <div className="active-div">
          <label htmlFor="" className={isActive ? "active" : ""}>
            {label}
          </label>
          <input
            disabled={
              status.type === "updateUser" && status.statu === "loading"
                ? true
                : false
            }
            type="text"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              setShowSave(true);
            }}
            onFocus={() => setIsActive(true)}
            onBlur={(e) => setIsActive(e.target.value ? true : false)}
          />
        </div>
      </div>
      {showSave && (
        <button className="btn-save-edit">
          <Check />
        </button>
      )}
    </form>
  );
}

export default EditForm;
