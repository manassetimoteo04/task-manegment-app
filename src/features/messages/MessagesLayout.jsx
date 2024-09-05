import ConversationContainer from "./ConversationContainer";
import MessagesContainer from "./MessagesContainer";
import ConversationUserDetail from "./ConversationUserDetail";
import { useApp } from "../../contexts/AppProvider";
import { useEffect, useState } from "react";
import NewConversation from "./NewConversation";
import { useDispatch, useSelector } from "react-redux";
import { getAllConversation } from "./messagesSlice";
import useConversationChanges from "../../hooks/useConversationChanges";

function MessagesLayout() {
  const { getConversationSubscription, removeConversationSubscription } =
    useConversationChanges();
  const {
    showMessageUserDetail,
    mobileShowMessage,
    showNewConList,
    setShowNewConvList,
  } = useApp();

  const { teams, status } = useSelector((state) => state.teams);
  const { currentUser } = useSelector((state) => state.auth);
  const DISPATCH = useDispatch();
  useEffect(() => {
    if (status.statu === "succeeded" && status.type === "getAll") {
      const ids = teams.map((team) => team.id);
      DISPATCH(getAllConversation({ teams: ids, id: currentUser.id }));
    }
  }, [teams]);

  useEffect(() => {
    const subscription = getConversationSubscription(teams);
    return () => {
      removeConversationSubscription(subscription);
    };
  }, [teams]);

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
