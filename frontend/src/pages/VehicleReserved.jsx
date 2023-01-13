import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import axios from "axios";
import Button from "@mui/material/Button";

import "react-datepicker/dist/react-datepicker.css";

function VehicleReserved() {
  const { vehicleId } = useParams();
  const [dateRange, setDateRange] = useState([new Date(), null]);
  const [startDate, endDate] = dateRange;
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

  function handleSubmit() {
    const data = JSON.stringify({
      startDate: startDate.toISOString().slice(0, 19).replace("T", " "),
      endDate: endDate.toISOString().slice(0, 19).replace("T", " "),
      userId: 1,
      vehicleId: 3,
    });

    const config = {
      method: "post",
      url: "http://localhost:5001/api/vehicles/1/reserved",
      headers: {
        "Content-Type": "application/json",
      },
      data,
    };

    axios(config)
      .then(function (response) {})
      .catch(function (error) {});
  }

  useEffect(() => {
    getAvailibilities();
  }, []);

  return (
    <div>
      <DatePicker
        selected={startDate}
        selectsRange={true}
        startDate={startDate}
        endDate={endDate}
        onChange={(update) => setDateRange(update)}
        includeDateIntervals={[
          { start: highlightWithRanges[0], end: highlightWithRanges[1] },
          { start: highlightWithRanges[2], end: highlightWithRanges[3] },
        ]}
        placeholderText="This highlight two ranges with custom classes"
        showTimeSelect
      />
      <Button
        style={{ width: "100%" }}
        onClick={(event) => {
          event.preventDefault();
          handleSubmit();
        }}
        variant="contained"
        type="submit"
      >
        Search
      </Button>
    </div>
  );
}
export default VehicleReserved;
