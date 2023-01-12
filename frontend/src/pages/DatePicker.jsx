import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Example() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  useEffect(() => {
    const yourDate = new Date(startDate);
    yourDate.toISOString();
  }, [startDate, endDate]);

  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <div>
      <DatePicker
        selected={startDate}
        onChange={onChange}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        timeIntervals={20}
        dateFormat="dd-MM-yyyy"
        minDate={new Date()}
        selectsRange
        inline
      />
    </div>
  );
}

export default Example;
