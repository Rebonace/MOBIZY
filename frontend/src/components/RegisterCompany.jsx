import React from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./RegisterCompagny.css";

// eslint-disable-next-line react/prop-types
function RegisterCompany({ handleChange, formValue }) {
  const info = [
    {
      type: "text",
      helperText: "* required",
      label: "Company Name",
      id: "demo-helper-text-aligned",
    },
    {
      type: "email",
      helperText: "* required",
      label: "Email Address",
      id: "demo-helper-text-aligned",
    },
    {
      type: "text",
      helperText: "* required",
      label: "Description",
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
    },
  ];

  const handleSubmit = async () => {
    await axios.post("http://localhost:5000/user/company", formValue);
  };

  return (
    <div>
      <h2>Register your Company</h2>
      <form className="company-form">
        {info.map((element) => (
          <div>
            <TextField
              onChange={(e) => handleChange(e)}
              id={element.id}
              helperText={element.helperText}
              type={element.type}
              key={element.name}
              label={element.label}
            />
          </div>
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

export default RegisterCompany;
