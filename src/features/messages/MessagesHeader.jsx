import { Plus } from "react-feather";
import Button from "../../ui/Button";

function MessagesHeader({children}) {
  return (
    <header className="project-header">
      {children}
    </header>
  );
}

export default MessagesHeader;
