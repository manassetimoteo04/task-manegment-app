import { useEffect, useRef } from "react";
import ConversationMessage from "./ConversationMessage";
import MessagesBox from "./MessagesBox";

function ConversationMessagesBox() {
  const refEl = useRef();
  useEffect(() => {
    refEl.current.scrollTop = refEl.current.scrollHeight;
  }, []);
  return (
    <div className="conversation-messages-box" ref={refEl}>
      <ConversationMessage type="received" />
      <ConversationMessage type="sent" />
      <ConversationMessage type="received" />
      <ConversationMessage type="sent" />
      <ConversationMessage type="received" />
      <ConversationMessage type="sent" />
      <ConversationMessage type="received" />
      <ConversationMessage type="sent" />
    </div>
  );
}

export default ConversationMessagesBox;
