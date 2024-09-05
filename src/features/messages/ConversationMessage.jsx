import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { getUserImageName } from "../../services/apiHelpers";

function ConversationMessage({ message }) {
  const [sender, setSender] = useState({});

  const {
    currentUser: { id },
  } = useSelector((state) => state.auth);

  useEffect(() => {
    async function getData() {
      const user = await getUserImageName(message.send_by);
      setSender(user);
    }
    getData();
  }, []);
  return (
    <div
      className={`conversation-message ${
        message.send_by === id ? "sent" : "received"
      }-message`}
    >
      <div className="message-content">
        {message.send_by !== id && (
          <span className="sender-name">{sender.name}</span>
        )}
        <span className="message-text">{message.content}</span>
        <span className="sent-time">10h</span>
      </div>
    </div>
  );
}

export default ConversationMessage;
