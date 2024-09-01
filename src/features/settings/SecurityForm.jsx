import { useEffect, useState } from "react";
import Button from "../../ui/Button";
import { Eye, EyeOff } from "react-feather";
import { useShowPopup } from "../../hooks/useShowPopup";
import { useDispatch, useSelector } from "react-redux";
import { changeUserPassword } from "../authentication/AuthSlice";
function SecurityForm() {
  const [actualPassword, setActualPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [Confirm, setConfirm] = useState("");
  const [showPopup] = useShowPopup();
  const DISPATCH = useDispatch();
  const { status, error } = useSelector((state) => state.auth);
  useEffect(() => {
    if (status.type === "changePassword" && status.statu === "loading")
      showPopup({ type: "loading", message: "Changing your password" });
    if (status.type === "changePassword" && status.statu === "succeeded") {
      showPopup({ type: "success", message: "Password changed successfully" });
    }
    if (status.type === "changePassword" && status.statu === "failed")
      showPopup({ type: "error", message: error });
  }, [status.statu]);
  function handleSubmit(e) {
    e.preventDefault();
    if (newPassword !== Confirm && Confirm !== "")
      return showPopup({
        type: "error",
        message: "Confirm password does not much the new password",
      });
    if (!Confirm)
      return showPopup({
        type: "error",
        message: "Please confirm the new password",
      });

    const password = {
      actualPassword,
      newPassword,
    };

    DISPATCH(changeUserPassword(password));
  }
  return (
    <form className="security-form" onSubmit={handleSubmit}>
      <SecurityInput label={"Actual Password"} onChange={setActualPassword} />{" "}
      <SecurityInput label={"New Password"} onChange={setNewPassword} />{" "}
      <SecurityInput label={"Confirm Password"} onChange={setConfirm} />
      <Button type="secondary">Change Password</Button>
    </form>
  );
}
function SecurityInput({ label, onChange }) {
  const [showPassword, setshowPassword] = useState(false);
  const { status } = useSelector((state) => state.auth);
  const [isActive, setIsActive] = useState(false);
  const [value, setValue] = useState("");
  useEffect(() => {
    if (status.type === "changePassword" && status.statu === "succeeded")
      setValue("");
  }, [status.statu]);
  useEffect(() => {
    onChange(value);
  }, [value]);
  return (
    <div className="security-form-box">
      <div>
        <label htmlFor="" className={isActive ? "active" : ""}>
          {label}
        </label>
        <input
          type={showPassword ? "text" : "password"}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => {
            setIsActive(true);
            setShowbtn(true);
          }}
          onBlur={(e) => {
            if (e.target.value !== "") setIsActive(true);
            if (e.target.value === "") setIsActive(false);
            setShowbtn(false);
          }}
        />
      </div>

      <button
        onClick={() => {
          setshowPassword((s) => !s);
        }}
      >
        {!showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
      </button>
    </div>
  );
}
export default SecurityForm;
