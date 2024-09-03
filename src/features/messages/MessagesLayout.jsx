import ConversationContainer from "./ConversationContainer";
import MessagesContainer from "./MessagesContainer";
import ConversationUserDetail from "./ConversationUserDetail";
import { useApp } from "../../contexts/AppProvider";
import { useState } from "react";

function MessagesLayout() {
  const { showMessageUserDetail, mobileShowMessage } = useApp();
  return (
    <section
      className={`section-messages ${
        showMessageUserDetail ? "show-detail" : ""
      } ${mobileShowMessage ? "show-messages" : ""}`}
    >
      <MessagesContainer />

      <ConversationContainer />
      {showMessageUserDetail && <ConversationUserDetail />}
    </section>
  );
}

export default MessagesLayout;
