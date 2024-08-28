import SearchInput from "../../ui/SearchInput";
import MessagesHeader from "./MessagesHeader";
import MessagesListBox from "./MessagesListBox";

function MessagesContainer() {
  return (
    <div className="messages-container">
      <MessagesHeader />
      <SearchInput setValue={() => {}} placeholder="Find message" />
      <MessagesListBox />
    </div>
  );
}

export default MessagesContainer;
