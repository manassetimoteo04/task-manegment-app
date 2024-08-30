import { useEffect } from "react";
import CalendarLayout from "../features/calender/CalendarLayout";

function Calender() {
  useEffect(() => {
    document.title = "Calender | see your calender";
  }, []);
  return (
    <main>
      <CalendarLayout />
    </main>
  );
}

export default Calender;
