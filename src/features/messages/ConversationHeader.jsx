import { Settings } from "react-feather";
import { useApp } from "../../contexts/AppProvider";

function ConversationHeader() {
  const { setShowMessageUserDetail } = useApp();
  return (
    <header className="conversation-header">
      <div className="user">
        <img src="me.jpg" alt="" />
        <h3>Manasse Timóteo</h3>
      </div>
      <button
        onClick={() => {
          setShowMessageUserDetail(true);
        }}
      >
        <Settings />
      </button>
    </header>
  );
}

export default ConversationHeader;
