import ConversationHeader from "./ConversationHeader";
import ConversationMessagesBox from "./ConversationMessagesBox";
import ConversationSendMessageForm from "./ConversationSendMessageForm";

function ConversationContainer() {
  return (
    <div className="conversation-container">
      <ConversationHeader />
      <ConversationMessagesBox />
      <ConversationSendMessageForm />
    </div>
  );
}

export default ConversationContainer;
