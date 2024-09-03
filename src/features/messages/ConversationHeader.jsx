import { ArrowLeft, Settings } from "react-feather";
import { useApp } from "../../contexts/AppProvider";

function ConversationHeader() {
  const { setShowMessageUserDetail, setMobileShowMessage } = useApp();
  return (
    <header className="conversation-header">
      <div className="user">
        <button
          className="btn-message-back"
          onClick={() => setMobileShowMessage(false)}
        >
          <ArrowLeft />
        </button>
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
