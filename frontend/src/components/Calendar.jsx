import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import axios from "axios";

import "react-datepicker/dist/react-datepicker.css";

function Calendar() {
  const { vehicleId } = useParams();
  const [startDate, setStartDate] = useState(new Date());

  const [highlightWithRanges, setHighlightWithRanges] = useState([]);

  const URL = import.meta.env.VITE_BACKEND_URL;

  function getAvailibilities() {
    axios.get(`${URL}/api/availibility/${vehicleId}`).then((res) => {
      setHighlightWithRanges([
        new Date(`${res.data[1].start_date_1}`),
        new Date(`${res.data[1].end_date_1}`),
        new Date(`${res.data[1].start_date_2}`),
        new Date(`${res.data[1].end_date_2}`),
      ]);
    });
  }

  useEffect(() => {
    getAvailibilities();
  }, []);

  return (
    <div>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        includeDateIntervals={[
          { start: highlightWithRanges[0], end: highlightWithRanges[1] },
          { start: highlightWithRanges[2], end: highlightWithRanges[3] },
        ]}
        placeholderText="This highlight two ranges with custom classes"
        showTimeSelect
      />
    </div>
  );
}
export default Calendar;
