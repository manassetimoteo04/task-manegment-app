import { useApp } from "../../contexts/AppProvider";
import ConversationHeader from "./ConversationHeader";
import ConversationMessagesBox from "./ConversationMessagesBox";
import ConversationSendMessageForm from "./ConversationSendMessageForm";
import NoSelectedItem from "../../ui/NoSelectedItem";
import Spinner from "../../ui/Spinner";
import { useSelector } from "react-redux";
function ConversationContainer() {
  const { currentConversation } = useApp();
  const { status, isLoading } = useSelector((state) => state.messages);
  console.log(status, isLoading);
  return (
    <div className="conversation-container">
      {currentConversation ? (
        <>
          <div className="conversation-con-grid">
            <ConversationHeader />
            <ConversationMessagesBox />
            <ConversationSendMessageForm />
          </div>

          {status.type === "getMessages" && status.statu === "loading" && (
            <div className="spinner-container-msg">
              <Spinner />
            </div>
          )}
        </>
      ) : (
        <NoSelectedItem>
          <h3>Messages</h3>
          <p>Select any conversation to get started</p>
        </NoSelectedItem>
      )}
    </div>
  );
}

export default ConversationContainer;
