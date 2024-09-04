import { ArrowLeft, Settings } from "react-feather";
import { useApp } from "../../contexts/AppProvider";
import { useEffect, useState } from "react";
import { getTeamImageName } from "../../services/apiHelpers";

function ConversationHeader() {
  const {
    setShowMessageUserDetail,
    setMobileShowMessage,
    currentConversation,
  } = useApp();
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function getUser() {
      const data = await getTeamImageName(currentConversation);
      setUser(data);
      console.log(data);
    }
    getUser();
  }, [currentConversation]);
  return (
    <header className="conversation-header" id={user?.id}>
      <div className="user">
        <button
          className="btn-message-back"
          onClick={() => setMobileShowMessage(false)}
        >
          <ArrowLeft />
        </button>
        <img src={user?.image} alt={user?.name} />
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
