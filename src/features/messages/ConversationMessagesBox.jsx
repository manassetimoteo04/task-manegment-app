import { useEffect, useRef } from "react";
import ConversationMessage from "./ConversationMessage";
import MessagesBox from "./MessagesBox";
import { useSelector, useDispatch } from "react-redux";
import { getConversationMessages } from "./messagesSlice";
import { useApp } from "../../contexts/AppProvider";
import useMessageChanges from "../../hooks/useMessageChanges";

function ConversationMessagesBox() {
  const { messages, conversationId } = useSelector((state) => state.messages);

  const { getMessageSubscription, removeMessageSubscription } =
    useMessageChanges();

  useEffect(() => {
    const subscription = getMessageSubscription(conversationId);
    return () => {
      removeMessageSubscription(subscription);
    };
  }, [conversationId]);
  const refEl = useRef();
  const dateRef = useRef(new Date());
  const DISPATCH = useDispatch();
  useEffect(() => {
    refEl.current.scrollTop = refEl.current.scrollHeight;
  }, [conversationId, messages]);
  useEffect(() => {
    if (conversationId)
      DISPATCH(getConversationMessages({ id: conversationId }));
  }, [conversationId]);
  return (
    <div className="conversation-messages-box" ref={refEl}>
      {messages.map((message) => {
        const date = new Date(message?.create_at);
        if (
          date.getDate() > dateRef.current.getDate() ||
          dateRef.current.getDate === 0
        ) {
          dateRef.current === new Date(message?.create_at);
          return (
            <>
              <span className="date">{dateRef.current.toDateString()}</span>
              <ConversationMessage message={message} key={message.id} />
            </>
          );
        }
        return <ConversationMessage message={message} key={message.id} />;
      })}
    </div>
  );
}

export default ConversationMessagesBox;
