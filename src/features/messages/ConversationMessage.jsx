import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { getUserImageName } from "../../services/apiHelpers";
import { formatHour } from "../../utils/helpers";
import { useApp } from "../../contexts/AppProvider";

function ConversationMessage({ message }) {
  const [sender, setSender] = useState({});
  const { currentConversation } = useApp();
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
        {currentConversation.isGroup && (
          <>
            {message.send_by !== id && (
              <span className="sender-name">{sender.name}</span>
            )}
          </>
        )}
        <span className="message-text">{message.content}</span>
        <span className="sent-time">
          {formatHour(new Date(message.created_at)).slice(0, -3)}
        </span>
      </div>
    </div>
  );
}

export default ConversationMessage;
