import { useEffect } from "react";
import MessagesLayout from "../features/messages/MessagesLayout";
function Messages() {
  useEffect(() => {
    document.title = "Messages | See all your messages";
  }, []);
  return (
    <main>
      <MessagesLayout />
    </main>
  );
}

export default Messages;
