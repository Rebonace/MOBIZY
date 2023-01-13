/* eslint-disable no-shadow */
/* eslint-disable no-restricted-syntax */
/* eslint-disable func-names */
/* eslint-disable no-unused-vars */
import axios from "axios";
import { useState } from "react";
import DatePicker from "react-datepicker";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Slider from "@mui/material/Slider";
import { useNavigate } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";

export default function HomeForm() {
  const [value, setValue] = useState(30);
  const [location, setLocation] = useState("30");
  const [checkedSonar, setCheckedSonar] = useState(true);
  const [checkedSphere, setCheckedSphere] = useState(true);
  const [checkedRamp, setCheckedRamp] = useState(true);
  const [dateRange, setDateRange] = useState([new Date(), null]);
  const [startDate, endDate] = dateRange;

  const navigate = useNavigate();

  const changeValue = (event, value) => {
    setValue(value);
  };
  const changeLocation = (event) => {
    setLocation(event.target.value);
  };

  const getText = (v) => `${value}€`;

  function handleSubmit() {
    const data = JSON.stringify({
      isRamp: checkedRamp,
      isSonar: checkedSonar,
      isSphere: checkedSphere,
      dailyPrice: value,
      location,
      dateReservationStart: startDate,
      dateReservationEnd: endDate,
    });

    const config = {
      method: "post",
      url: "http://localhost:5001/api/vehicles/filter",
      headers: {
        "Content-Type": "application/json",
      },
      data,
    };

    axios(config)
      .then(function (response) {
        console.log(response);
        window.localStorage.setItem("filter", JSON.stringify(response.data));
        navigate("/vehicles/filter");
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const customMarks = [
    {
      value: 100,
      label: "$100",
    },
    {
      value: 200,
      label: "$200",
    },
    {
      value: 300,
      label: "$400",
    },
    {
      value: 400,
      label: "$400",
    },
    {
      value: 500,
      label: "$500",
    },
  ];

  const handleChangeSphere = (event) => {
    setCheckedSphere(event.target.checked);
  };

  const handleChangeSonar = (event) => {
    setCheckedSonar(event.target.checked);
  };

  const handleChangeRamp = (event) => {
    setCheckedRamp(event.target.checked);
  };

  return (
    <div className="home-form-container">
      <h2>What are you needing ?</h2>
      <form className="home-form">
        <FormGroup>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              paddingBottom: "1rem",
            }}
          >
            <FormControlLabel
              onChange={handleChangeRamp}
              control={<Checkbox defaultChecked />}
              label="Ramp"
            />
            <FormControlLabel
              onChange={handleChangeSonar}
              control={<Checkbox defaultChecked />}
              label="Sonar"
            />
            <FormControlLabel
              onChange={handleChangeSphere}
              control={<Checkbox defaultChecked />}
              label="Sphere"
            />
          </div>
        </FormGroup>

        <Slider
          aria-label="Price"
          defaultValue={30}
          getAriaValueText={getText}
          valueLabelDisplay="auto"
          value={value}
          step={10}
          min={0}
          max={500}
          onChange={changeValue}
          marks={customMarks}
        />
        <h3
          style={{ width: "100%", textAlign: "center", paddingBottom: "1rem" }}
        >
          Max price
        </h3>
        <TextField
          style={{ width: "100%", paddingBottom: "1rem" }}
          onChange={(e) => changeLocation(e)}
          helperText="Please enter the location"
          label="Location"
        />
        <DatePicker
          style={{ width: "100%" }}
          selectsRange
          startDate={startDate}
          endDate={endDate}
          onChange={(e) => {
            setDateRange(e);
          }}
          withPortal
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
      </form>
    </div>
  );
}
