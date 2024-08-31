import { Smile, X } from "react-feather";
import { useApp } from "../../contexts/AppProvider";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../ui/Spinner";
import SmallBtn from "../../ui/SmallBtn";
import AddForm from "./AddForm";
import { useEffect, useState } from "react";
import { addNewMember, addTeamTagsNew } from "./teamSlice";
import { getUserImageName } from "../../services/apiHelpers";
import { useShowPopup } from "../../hooks/useShowPopup";

function TeamDetail() {
  const { setShowTeamDetail } = useApp();
  const { currentTeam, status } = useSelector((state) => state.teams);
  const [showAddTagForm, setShowAddTagForm] = useState(false);
  const [showAddMemberForm, setShowAddMemberForm] = useState(false);
  const DISPATCH = useDispatch();

  const [showPopup] = useShowPopup();
  const { status: teamStatus, error } = useSelector((state) => state.teams);

  useEffect(() => {
    if (teamStatus.type === "addMember" && teamStatus.statu === "succeeded")
      showPopup({ type: "success", message: "New member added successfully" });
    if (teamStatus.type === "addMember" && teamStatus.statu === "failed")
      showPopup({ type: "error", message: error.error });
    if (teamStatus.type === "addMember" && teamStatus.statu === "loading")
      showPopup({ type: "loading", message: `Adding user...` });
  }, [teamStatus.statu]);
  function handleAddTag(value) {
    const arr = [...currentTeam.tags, value];
    setShowAddTagForm(false);
    DISPATCH(addTeamTagsNew({ id: currentTeam.id, arr }));
  }
  function handleAddMember(email) {
    if (!error.error) setShowAddMemberForm(false);
    DISPATCH(
      addNewMember({ email, id: currentTeam.id, arr: currentTeam.members })
    );
  }
  return (
    <div className="team-detail">
      {status.type === "get" && status.statu === "loading" ? (
        <Spinner />
      ) : (
        <>
          <header>
            <div className="div">
              <img src={currentTeam.image} alt={currentTeam.name} />
              <div>
                <h3>{currentTeam.name}</h3>
                <span>{currentTeam.bio}</span>
              </div>
            </div>
            <button onClick={() => setShowTeamDetail(false)}>
              <X />
            </button>
          </header>
          <div className="content">
            <div className="team-detail-content">
              <span className="team-detail-tag">CREATED BY</span>
              <p>Manasse Timóteo</p>
            </div>
            <div className="team-detail-content">
              <span className="team-detail-tag">
                TAGS{" "}
                {!showAddTagForm && (
                  <SmallBtn onClick={() => setShowAddTagForm(!false)} />
                )}
              </span>
              {showAddTagForm && (
                <AddForm
                  onSubmit={handleAddTag}
                  placeholder="Add tag"
                  type="text"
                />
              )}
              <div className="tag-list">
                {currentTeam.tags.map((tag) => (
                  <p className="team-tag">{tag}</p>
                ))}

                {currentTeam.tags.length === 0 && (
                  <DetailEmptyList>no tag found</DetailEmptyList>
                )}
              </div>
            </div>
            <div className="team-detail-content">
              <span className="team-detail-tag">DESCRIPTION</span>
              <p>
                {currentTeam.description ? (
                  currentTeam.description
                ) : (
                  <DetailEmptyList>No description found</DetailEmptyList>
                )}
              </p>
            </div>{" "}
            <div className="team-detail-content">
              <span className="team-detail-tag">
                MEMBERS
                {!showAddMemberForm && (
                  <SmallBtn onClick={() => setShowAddMemberForm(!false)} />
                )}
              </span>
              {showAddMemberForm && (
                <AddForm
                  onSubmit={handleAddMember}
                  type="email"
                  placeholder="Add correctly user email"
                />
              )}

              <ul className="members-list">
                {currentTeam.members.length > 0 ? (
                  currentTeam.members.map((mem) => <TeamMemberItem id={mem} />)
                ) : (
                  <DetailEmptyList>no tag found</DetailEmptyList>
                )}
              </ul>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
function TeamMemberItem({ id }) {
  const [data, setData] = useState({});
  useEffect(() => {
    async function getData() {
      const res = await getUserImageName(id);
      setData(res);
    }
    getData();
  }, []);

  return (
    <li className="member-item">
      <img
        src={data?.avatar ? data?.avatar : "default-user.jpg"}
        alt={data?.name}
      />
      <span>{data?.name}</span>
    </li>
  );
}
function DetailEmptyList({ children }) {
  return (
    <div className="detail-empty-list">
      <Smile /> {children}
    </div>
  );
}

export default TeamDetail;
