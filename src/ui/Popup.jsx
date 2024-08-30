import { Check, X } from "react-feather";
import { useApp } from "../contexts/AppProvider";
import { useEffect, useRef, useState } from "react";
function Popup() {
  const { dispatch, showPopup } = useApp();
  const [popupList, setPopupList] = useState([]);

  useEffect(() => {
    if (showPopup) {
      setPopupList((prevList) => [...prevList, showPopup]);
    }
  }, [showPopup]);

  useEffect(() => {
    // if (popupList.length === 0) {
    //   dispatch({ type: "app/closePopup" });
    // }
  }, [popupList, dispatch]);
  console.log(popupList);
  const handleClose = (index) => {
    setPopupList((prevList) => prevList.filter((_, i) => i !== index));
  };

  return (
    <div className="popup-container">
      {popupList.map((curr, index) => (
        <div key={index} className="popup">
          <span className={`popup-icon popup-${curr.type}`}>
            {curr?.type === "success" && <Check />}
            {curr?.type === "error" && <X />}
          </span>
          <span>{curr?.message}</span>
          <button onClick={() => handleClose(index)}>
            <X size={18} />
          </button>
        </div>
      ))}
    </div>
  );
}

export default Popup;
