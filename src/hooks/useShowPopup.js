import { useEffect } from "react";
import { useApp } from "../contexts/AppProvider";

export function useShowPopup() {
  const { showPopup, dispatch } = useApp();
  const setPopup = (objs) => {
    dispatch({ type: "app/showPopup", payload: objs });
  };
  useEffect(() => {
    showPopup?.type === "success" &&
      setTimeout(() => dispatch({ type: "app/closePopup" }), 3000);
  }, [showPopup]);
  return [setPopup];
}
