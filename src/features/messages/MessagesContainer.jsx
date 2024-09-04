import { Plus } from "react-feather";
import Button from "../../ui/Button";
import SearchInput from "../../ui/SearchInput";
import MessagesHeader from "./MessagesHeader";
import MessagesListBox from "./MessagesListBox";
import { useApp } from "../../contexts/AppProvider";

function MessagesContainer() {
  const { setShowNewConvList } = useApp();
  return (
    <div className="messages-container">
      <MessagesHeader>
        <div>
          <h2>Messages</h2>
        </div>
        <Button type="primary" onClick={() => setShowNewConvList(true)}>
          <Plus />
        </Button>
      </MessagesHeader>
      <SearchInput setValue={() => {}} placeholder="Find message" />
      <MessagesListBox />
    </div>
  );
}

export default MessagesContainer;
