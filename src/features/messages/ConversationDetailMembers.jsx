import ConvMemberBox from "./ConvMemberBox";

function ConversationDetailTeamBox({ members }) {
  return (
    <div className="conversation-detail-team-box">
      <span>
        MEMBERS <strong>{members.length}</strong>
      </span>
      <div className="conv-member-list">
        {members.map((mem) => (
          <ConvMemberBox member={mem} index={2} />
        ))}
      </div>
    </div>
  );
}

export default ConversationDetailTeamBox;
