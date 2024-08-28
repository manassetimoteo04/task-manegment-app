import { X } from "react-feather";
import ConversationDetailTeamBox from "./ConversationDetailMembers";
import { useApp } from "../../contexts/AppProvider";

function ConversationUserDetail() {
  const { setShowMessageUserDetail } = useApp();
  return (
    <div className="conversation-user-detail">
      <header>
        <button
          className="btn-close-detail"
          onClick={() => setShowMessageUserDetail(false)}
        >
          <X size={18} />
        </button>
        <img src="me.jpg" alt="" />
        <h3>Manasse Timóteo</h3>
      </header>
      <ConversationDetailTeamBox />
    </div>
  );
}

export default ConversationUserDetail;
