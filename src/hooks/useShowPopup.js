import { useEffect } from "react";
import { useApp } from "../contexts/AppProvider";

export function useShowPopup() {
  const { dispatch } = useApp();
  const setPopup = (objs) => {
    dispatch({ type: "app/showPopup", payload: objs });
  };

  return [setPopup];
}
