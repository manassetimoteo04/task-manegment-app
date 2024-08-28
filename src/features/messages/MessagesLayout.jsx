import ConversationContainer from "./ConversationContainer";
import MessagesContainer from "./MessagesContainer";
import ConversationUserDetail from "./ConversationUserDetail";
import { useApp } from "../../contexts/AppProvider";

function MessagesLayout() {
  const { showMessageUserDetail } = useApp();
  return (
    <section
      className={`section-messages ${
        showMessageUserDetail ? "show-detail" : ""
      }`}
    >
      <MessagesContainer />
      <ConversationContainer />
      {showMessageUserDetail && <ConversationUserDetail />}
    </section>
  );
}

export default MessagesLayout;
