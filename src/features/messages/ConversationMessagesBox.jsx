import { useEffect, useRef } from "react";
import ConversationMessage from "./ConversationMessage";
import MessagesBox from "./MessagesBox";
import { useSelector, useDispatch } from "react-redux";
import { getConversationMessages, setReadMessages } from "./messagesSlice";
import { useApp } from "../../contexts/AppProvider";
import useMessageChanges from "../../hooks/useMessageChanges";

function ConversationMessagesBox() {
  const { messages, conversationList, conversationId } = useSelector(
    (state) => state.messages
  );
  const { currentUser } = useSelector((state) => state.auth);
  const DISPATCH = useDispatch();
  const refEl = useRef();
  const dateRef = useRef(new Date());
  const { getMessageSubscription, removeMessageSubscription } =
    useMessageChanges();

  useEffect(() => {
    const subscription = getMessageSubscription(conversationId);
    return () => {
      removeMessageSubscription(subscription);
    };
  }, [conversationId]);

  useEffect(() => {
    const list = messages
      .filter((msg) => msg.send_by !== currentUser.id)
      .map((item) => {
        return {
          read_at: new Date().toISOString(),
          message_id: item.id,
          user_id: currentUser.id,
          conversation_id: item.conversation_id,
        };
      });
    console.log(list);
    DISPATCH(setReadMessages(list));
  }, [messages]);

  console.log(messages);
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
