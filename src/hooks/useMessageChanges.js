import { useDispatch, useSelector } from "react-redux";
import { supabase } from "../services/supabase";
import { setNewMessage } from "../features/messages/messagesSlice";
import { useRef } from "react";

function useMessageChanges() {
  const DISPATCH = useDispatch();
  const { currentUser } = useSelector((state) => state.auth);
  const subscriptionRef = useRef(null);
  function getMessageSubscription(id) {
    subscriptionRef.current = supabase;
    supabase
      .channel("custom-insert-channel")
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "messages",
          filter: `conversation_id=eq.${id}`,
        },
        (payload) => {
          if (currentUser.id !== payload.new.send_by)
            DISPATCH(setNewMessage(payload.new));
        }
      )
      .subscribe();
  }
  function removeMessageSubscription() {
    if (subscriptionRef.current) {
      supabase.removeChannel(subscriptionRef.current);
    }
  }
  return { getMessageSubscription, removeMessageSubscription };
}

export default useMessageChanges;
