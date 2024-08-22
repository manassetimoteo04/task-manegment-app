import { useEffect, useState } from "react";
import { formatHour, formateDate } from "../utils/helpers";

function DateHeader() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    setInterval(() => setDate(new Date()), 1000);
  }, [date]);
  return (
    <div className="date-header">
      <h4>{formatHour(date)}</h4>
      <span>{formateDate(date)}</span>
    </div>
  );
}

export default DateHeader;
