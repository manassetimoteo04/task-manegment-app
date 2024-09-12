import { useDispatch, useSelector } from "react-redux";
import { setRecentConversation } from "../features/messages/messagesSlice";
import { supabase } from "../services/supabase";
import { useRef } from "react";

function useConversationChanges() {
  const DISPATCH = useDispatch();
  const { currentUser } = useSelector((state) => state.auth);
  const subscriptionRef = useRef(null);

  function getConversationSubscription(teams) {
    const idFilter = teams.map((team) => team.id).join(",");

    subscriptionRef.current = supabase
      .channel("custom-insert")
      .on(
        "postgres_changes",
        {
          event: "UPDATE",
          schema: "public",
          table: "conversation",
        },
        (payload) => {
          // Filtragem manual usando OR
          const teamMatch = idFilter.includes(payload.new.team_id);
          const memberMatch = payload.new.members.includes(currentUser.id);

          if (teamMatch || memberMatch) {
            // Só despacha a ação se uma das condições for verdadeira
            if (currentUser.id !== payload.new.last_message.send_by) {
              DISPATCH(setRecentConversation(payload.new));
            }
          }
        }
      )
      .subscribe();
  }
  function removeConversationSubscription() {
    if (subscriptionRef.current) {
      supabase.removeChannel(subscriptionRef.current);
    }
  }
  return { getConversationSubscription, removeConversationSubscription };
}
export default useConversationChanges;
