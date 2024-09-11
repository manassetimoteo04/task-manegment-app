import { useSelector } from "react-redux";
import MessagesBox from "./MessagesBox";
import ListSkeletonLoading from "../../ui/ListSkeletonLoading";
import ListEmpty from "../../ui/ListEmpty";
import { useEffect } from "react";

function MessagesListBox() {
  const { conversationList, status } = useSelector((state) => state.messages);

  return (
    <div className="messages-list-box">
      {status.type === "getConversations" && status.statu === "loading" ? (
        <ListSkeletonLoading times={8} />
      ) : conversationList.length > 0 ? (
        conversationList.map((conv, index) => (
          <MessagesBox conv={conv} key={conv.id} index={index} />
        ))
      ) : (
        <ListEmpty>You have no message</ListEmpty>
      )}
    </div>
  );
}

export default MessagesListBox;
