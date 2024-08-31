import { useEffect, useRef, useState } from "react";
import { Edit } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import { userUpdateInfor } from "../authentication/AuthSlice";
import { useShowPopup } from "../../hooks/useShowPopup";

function UserProfileHeader() {
  const { currentUser, status } = useSelector((state) => state.auth);
  const DISPATCH = useDispatch();
  const [file, setFile] = useState("");
  const [showPopup] = useShowPopup();
  useEffect(() => {
    const data = { table: "avatar", value: file, id: currentUser.id };
    if (file) DISPATCH(userUpdateInfor(data));
  }, [file]);
  useEffect(() => {
    if (status.statu === "loading" && status.type === "updateUser")
      showPopup({ type: "loading", message: "Updating avatar..." });
    if (status.statu === "succeeded" && status.type === "updateUser")
      showPopup({ type: "success", message: "Avatar updated successfully" });
    if (status.statu === "error" && status.type === "updateUser")
      showPopup({ type: "error", message: "Avatar update failed" });
  }, [status.statu]);
  const ref = useRef();
  return (
    <header className="user-header">
      <div className="user-img-box">
        <img
          src={currentUser?.avatar ? currentUser?.avatar : "default-user.jpg"}
          alt={currentUser?.name}
        />
        <button
          className="btn-upload-avatar"
          onClick={() => {
            ref.current.click();
          }}
        >
          <Edit size={18} />
          <input
            type="file"
            ref={ref}
            onChange={(e) => setFile(e.target.files[0])}
          />
        </button>
      </div>
      <div>
        <h3>{currentUser.name}</h3>
        <span>{currentUser.bio}</span>
      </div>
    </header>
  );
}

export default UserProfileHeader;
