import { X } from "react-feather";
import { useApp } from "../../contexts/AppProvider";

function TeamDetail() {
  const { setShowTeamDetail } = useApp();
  return (
    <div className="team-detail">
      <header>
        <div className="div">
          <img src="me.jpg" alt="" />
          <div>
            <h3>Team Name</h3>
            <span>Bio</span>
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
          <span className="team-detail-tag">TAGS</span>
          <div className="tag-list">
            <p className="team-tag">designers</p>
            <p className="team-tag">designers</p>
            <p className="team-tag">designers 4ever</p>
            <p className="team-tag">designers</p>
            <p className="team-tag">designers</p>
          </div>
        </div>
        <div className="team-detail-content">
          <span className="team-detail-tag">DESCRIPTION</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sed
            corporis consequatur, culpa quasi impedit omnis
          </p>
        </div>{" "}
        <div className="team-detail-content">
          <span className="team-detail-tag">MEMBERS</span>
          <ul className="members-list">
            <TeamMemberItem />
            <TeamMemberItem />
            <TeamMemberItem />
          </ul>
        </div>
      </div>
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

export default TeamDetail;
