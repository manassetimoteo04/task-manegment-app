import { Smile, X } from "react-feather";
import { useApp } from "../../contexts/AppProvider";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../ui/Spinner";
import SmallBtn from "../../ui/SmallBtn";
import AddForm from "./AddForm";
import { useState } from "react";
import { addTeamTagsNew } from "./teamSlice";

function TeamDetail() {
  const { setShowTeamDetail } = useApp();
  const { currentTeam, status } = useSelector((state) => state.teams);
  const [showAddTagForm, setShowAddTagForm] = useState(false);
  const [showAddMemberForm, setShowAddMemberForm] = useState(false);
  const DISPATCH = useDispatch();
  function handleAddTag(value) {
    const arr = [...currentTeam.tags, value];
    setShowAddTagForm(false);
    DISPATCH(addTeamTagsNew({ id: currentTeam.id, arr }));
  }
  function handleAddMember() {}
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
                  currentTeam.members.map((tag) => (
                    <p className="team-tag">designers</p>
                  ))
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
function TeamMemberItem() {
  return (
    <li className="member-item">
      <img src="me.jpg" alt="" />
      <span>Manasse Timóteo</span>
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
