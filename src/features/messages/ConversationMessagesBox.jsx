import { useEffect, useRef } from "react";
import ConversationMessage from "./ConversationMessage";
import MessagesBox from "./MessagesBox";
import { useSelector, useDispatch } from "react-redux";
import { getConversationMessages } from "./messagesSlice";

function ConversationMessagesBox() {
  const { messages, conversationId } = useSelector((state) => state.messages);
  const refEl = useRef();
  const DISPATCH = useDispatch();
  useEffect(() => {
    refEl.current.scrollTop = refEl.current.scrollHeight;
  }, []);
  useEffect(() => {
    if (conversationId)
      DISPATCH(getConversationMessages({ id: conversationId }));
  }, [conversationId]);
  return (
    <div className="conversation-messages-box" ref={refEl}>
      {messages.map((message) => (
        <ConversationMessage message={message} />
      ))}
      {/* <ConversationMessage type="sent" />
      <ConversationMessage type="received" />
      <ConversationMessage type="sent" />
      <ConversationMessage type="received" />
      <ConversationMessage type="sent" />
      <ConversationMessage type="received" />
      <ConversationMessage type="sent" /> */}
    </div>
  );
}

export default ConversationMessagesBox;
