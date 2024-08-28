import { Plus } from "react-feather";
import Button from "../../ui/Button";
import ConvMemberList from "./ConvMemberList";

function ConversationDetailTeamBox() {
  return (
    <div className="conversation-detail-team-box">
      <span className="team-tag">
        MEMBERS <strong>23</strong>
      </span>
      <ConvMemberList />
      <Button type="secondary">
        <Plus /> Add member
      </Button>
    </div>
  );
}

export default ConversationDetailTeamBox;
