import { ArrowLeft, Settings } from "react-feather";
import { useApp } from "../../contexts/AppProvider";
import { useEffect, useState } from "react";
import { getTeamImageName, getUserImageName } from "../../services/apiHelpers";

function ConversationHeader() {
  const {
    setShowMessageUserDetail,
    setMobileShowMessage,
    currentConversation,
  } = useApp();
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function getUser() {
      if (currentConversation.isGroup) {
        const data = await getTeamImageName(currentConversation.id);
        setUser(data);
      }
      if (!currentConversation.isGroup) {
        const data = await getUserImageName(currentConversation.id);
        setUser(data);
      }
    }
    getUser();
  }, [currentConversation.id]);
  return (
    <header className="conversation-header" id={user?.id}>
      <div className="user">
        <button
          className="btn-message-back"
          onClick={() => setMobileShowMessage(false)}
        >
          <ArrowLeft />
        </button>
        <img src={user?.image || user?.avatar} alt={user?.name} />
        <h3>{user?.name} </h3>
      </div>
      <button
        onClick={() => {
          setShowMessageUserDetail(true);
        }}
      >
        <Settings />
      </button>
    </header>
  );
}

export default ConversationHeader;
