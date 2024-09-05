import { X } from "react-feather";
import ConversationDetailTeamBox from "./ConversationDetailMembers";
import { useApp } from "../../contexts/AppProvider";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getTeamImageName } from "../../services/apiHelpers";
import Spinner from "../../ui/Spinner";

function ConversationUserDetail() {
  const { setShowMessageUserDetail, currentConversation } = useApp();
  const [team, setTeam] = useState({});
  const [isLoading, setIsLoand] = useState(true);
  useEffect(() => {
    setIsLoand(true);
    async function getData() {
      setIsLoand(true);

      const data = await getTeamImageName(currentConversation);
      setIsLoand(false);

      setTeam(data);
    }
    getData();
  }, [currentConversation]);
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
            <img src={team.image} alt={team.name} />
            <h3>{team.name}</h3>
          </header>
          <ConversationDetailTeamBox members={team.members} />
        </>
      ) : (
        <Spinner />
      )}
    </div>
  );
}

export default ConversationUserDetail;
