import { X } from "react-feather";
import Button from "../../ui/Button";
import ButtonSpinner from "../../ui/ButtonSpinner";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createNewTeam } from "./teamSlice";
import { useApp } from "../../contexts/AppProvider";
import { useShowPopup } from "../../hooks/useShowPopup";
import { useNavigate } from "react-router";
function TeamForm() {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const { status } = useSelector((state) => state.teams);
  const { currentUser } = useSelector((state) => state.auth);
  const DISPATCH = useDispatch();
  const navigate = useNavigate();
  const { dispatch } = useApp();
  const [showPopup] = useShowPopup();
  function handleSubmit(e) {
    e.preventDefault();
    const newTeam = {
      name,
      bio,
      description,
      image,
      createdBy: currentUser.id,
    };
    DISPATCH(createNewTeam(newTeam));
  }
  useEffect(() => {
    if (status.type === "create" && status.statu === "succeeded") {
      // dispatch({ type: "team/closeForm" });
      navigate(-1);
      showPopup({ type: "success", message: "Team created successfully" });
    }
    if (status.type === "create" && status.statu === "failed") {
      showPopup({
        type: "error",
        message: "Something wen't wrong try again later",
      });
    }
    if (status.type === "create" && status.statu === "loading") {
      showPopup({
        type: "loading",
        message: "Creating new team...",
      });
    }
  }, [status.statu]);

  return (
    <form className="team-form" onSubmit={handleSubmit}>
      <header>
        <h3>Create New Team</h3>
        <button
          onClick={() => {
            // dispatch({ type: "team/closeForm" });
            navigate(-1);
          }}
        >
          <X size={18} />
        </button>
      </header>
      <div className="group">
        <div className="form-group">
          <label htmlFor="name">Team Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Team Bio</label>
          <input
            type="text"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Team Description</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Upload file</label>
          <input
            type="file"
            name=""
            id="image"
            files={image}
            onChange={(e) => setImage(e.target.files[0])}
            accept="image/*"
          />
        </div>
        <Button type="secondary">
          {status.type === "create" && status.statu === "loading" ? (
            <ButtonSpinner />
          ) : (
            "Create Team"
          )}
        </Button>
      </div>
    </form>
  );
}

export default TeamForm;
