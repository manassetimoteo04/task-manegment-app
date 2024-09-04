import { Plus, X } from "react-feather";
import SearchInput from "../../ui/SearchInput";
import MessagesHeader from "./MessagesHeader";
import Button from "../../ui/Button";
import { useApp } from "../../contexts/AppProvider";
import { useSelector } from "react-redux";

function NewConversation() {
  const { setShowNewConvList } = useApp();
  return (
    <div className="new-conversation">
      <MessagesHeader>
        <div>
          <h2>New conversation</h2>
        </div>
        <Button type="primary" onClick={() => setShowNewConvList(false)}>
          <X />
        </Button>
      </MessagesHeader>
      <SearchInput setValue={() => {}} placeholder="Find team" />
      <ConvTeamList />
    </div>
  );
}
function ConvTeamList() {
  const { teams } = useSelector((state) => state.teams);
  return (
    <ul className="conv-team-list">
      <span>Teams</span>
      {teams.map((team) => (
        <ConvTeamItem team={team} key={team.id} />
      ))}
    </ul>
  );
}
function ConvTeamItem({ team }) {
  const { dispatch, currentConversation } = useApp();
  return (
    <li
      onClick={() =>
        dispatch({ type: "messages/setCurrentConv", payload: team.id })
      }
    >
      <img src={team.image} alt="" /> <h3>{team.name}</h3>
    </li>
  );
}
export default NewConversation;
