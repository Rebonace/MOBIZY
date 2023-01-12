import React from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import "./RegisterIndividual.css";

// eslint-disable-next-line react/prop-types
function RegisterIndividual({ handleChange, formValue }) {
  const info = [
    {
      type: "text",
      helperText: "* required",
      label: "First Name",
      id: "demo-helper-text-aligned",
    },
    {
      type: "text",
      helperText: "* required",
      label: "Last Name",
      id: "demo-helper-text-aligned",
    },
    {
      type: "text",
      helperText: "* required",
      label: "Licence",
      id: "demo-helper-text-aligned",
    },
    {
      type: "text",
      helperText: "* required",
      label: "Description",
      id: "demo-helper-text-aligned",
    },
    {
      type: "email",
      helperText: "* required",
      label: "Email Address",
      id: "demo-helper-text-aligned",
    },
    {
      type: "password",
      helperText: "* required",
      label: "Password",
      id: "demo-helper-text-aligned",
    },
    {
      type: "password",
      helperText: "* required",
      label: "Confirm Password",
      id: "demo-helper-text-aligned",
    },
  ];

  const handleSubmit = async () => {
    await axios.post("http://localhost:5000/user/individual", formValue);
  };

  return (
    <div>
      <h2>Hello User! Create your profile</h2>
      <form className="individual-form">
        {info.map((element) => (
          <TextField
            onChange={handleChange}
            type={element.type}
            helperText={element.helperText}
            key={element.name}
            label={element.label}
          />
        ))}
        <Button
          onClick={(event) => {
            event.preventDefault();
            handleSubmit();
          }}
          type="submit"
          variant="contained"
        >
          Login
        </Button>
        <Button>Forgot Password ?</Button>
      </form>
    </div>
  );
}

export default RegisterIndividual;
