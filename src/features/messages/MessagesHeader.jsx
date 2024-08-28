import { Plus } from "react-feather";
import Button from "../../ui/Button";

function MessagesHeader() {
  return (
    <header className="project-header">
      <div>
        <h2>Messages</h2>
      </div>
      <Button type="primary">
        <Plus />
      </Button>
    </header>
  );
}

export default MessagesHeader;
