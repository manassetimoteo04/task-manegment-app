import { Check, X } from "react-feather";
import { useApp } from "../contexts/AppProvider";
import { useEffect } from "react";

function Popup({ popupType }) {
  const { dispatch, showPopup } = useApp();
  useEffect(() => {
    showPopup?.type === "success" &&
      setTimeout(() => dispatch({ type: "app/closePopup" }), 3000);
  }, [showPopup]);
  return (
    <div className="popup">
      <span className={`popup-icon popup-${showPopup.type}`}>
        {showPopup?.type === "success" && <Check />}{" "}
        {showPopup?.type === "error" && <X />}
      </span>
      <span>{showPopup?.message}</span>
      <button onClick={() => dispatch({ type: "app/closePopup" })}>
        <X size={18} />
      </button>
    </div>
  );
}

export default Popup;
