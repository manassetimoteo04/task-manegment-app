import { X } from "react-feather";
import ConversationDetailTeamBox from "./ConversationDetailMembers";
import { useApp } from "../../contexts/AppProvider";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getTeamImageName, getUserImageName } from "../../services/apiHelpers";
import Spinner from "../../ui/Spinner";
import ConversationDetailUserInfor from "./ConversationDetailUserInfor";

function ConversationUserDetail() {
  const { setShowMessageUserDetail, currentConversation } = useApp();
  const [inforData, setInforData] = useState({});
  const [isLoading, setIsLoand] = useState(true);
  useEffect(() => {
    setIsLoand(true);
    async function getData() {
      setIsLoand(true);
      if (currentConversation.isGroup) {
        const data = await getTeamImageName(currentConversation.id);
        setInforData(data);
      }
      if (!currentConversation.isGroup) {
        const data = await getUserImageName(currentConversation.id);
        setInforData(data);
      }
      setIsLoand(false);
    }
    getData();
  }, [currentConversation?.id]);
  return (
    <div className="conversation-user-detail">
      {!isLoading ? (
        <>
          <header>
            <button
              className="btn-close-detail"
              onClick={() => setShowMessageUserDetail(false)}
            >
              <X size={18} />
            </button>
            <img
              src={inforData.image || inforData.avatar}
              alt={inforData.name}
            />
            <h3>{inforData.name}</h3>
          </header>
          {currentConversation.isGroup && (
            <ConversationDetailTeamBox members={inforData.members} />
          )}
          {!currentConversation.isGroup && (
            <ConversationDetailUserInfor infor={inforData} />
          )}
        </>
      ) : (
        <Spinner />
      )}
    </div>
  );
}

export default ConversationUserDetail;
