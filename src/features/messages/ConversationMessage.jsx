import { useSelector } from "react-redux";

function ConversationMessage({ message }) {
  const {
    currentUser: { id },
  } = useSelector((state) => state.auth);
  return (
    <div
      className={`conversation-message ${
        message.send_by === id ? "sent" : "received"
      }-message`}
    >
      <div className="message-content">
        <div>
          <span className="sender-name">Manasse Timóteo</span>
          <span className="sent-time">10h</span>
        </div>
        <p className="message-text">{message.content}</p>
      </div>
    </div>
  );
}

export default ConversationMessage;
