import { Check, X } from "react-feather";
import { useApp } from "../contexts/AppProvider";
import { useEffect, useRef, useState } from "react";
import ButtonSpinner from "./ButtonSpinner";
function Popup() {
  const { dispatch, showPopup } = useApp();
  const [popupList, setPopupList] = useState([]);

  useEffect(() => {
    if (showPopup) {
      setPopupList((prevList) => [...prevList, showPopup]);
    }
  }, [showPopup]);
  useEffect(() => {
    showPopup?.type === "success" &&
      setTimeout(() => dispatch({ type: "app/closePopup" }), 3000);
  }, [showPopup]);
  const handleClose = () => {
    dispatch({ type: "app/closePopup" });
  };

  return (
    <div className="popup-container">
      <div className="popup">
        <span className={`popup-icon popup-${showPopup.type}`}>
          {showPopup?.type === "success" && <Check />}
          {showPopup?.type === "error" && <X />}
          {showPopup?.type === "loading" && <ButtonSpinner />}
        </span>
        <span>{showPopup?.message}</span>
        <button onClick={() => handleClose()}>
          <X size={18} />
        </button>
      </div>
    </div>
  );
}

export default Popup;
