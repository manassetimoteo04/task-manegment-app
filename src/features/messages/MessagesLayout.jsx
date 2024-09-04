import ConversationContainer from "./ConversationContainer";
import MessagesContainer from "./MessagesContainer";
import ConversationUserDetail from "./ConversationUserDetail";
import { useApp } from "../../contexts/AppProvider";
import { useState } from "react";
import NewConversation from "./NewConversation";

function MessagesLayout() {
  const {
    showMessageUserDetail,
    mobileShowMessage,
    showNewConList,
    setShowNewConvList,
  } = useApp();
  return (
    <section
      className={`section-messages ${
        showMessageUserDetail ? "show-detail" : ""
      } ${mobileShowMessage ? "show-messages" : ""}`}
    >
      {!showNewConList && <MessagesContainer />}
      {showNewConList && <NewConversation />}
      <ConversationContainer />
      {showMessageUserDetail && <ConversationUserDetail />}
    </section>
  );
}

export default MessagesLayout;
