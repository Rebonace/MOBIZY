import axios from "axios";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./LoginPage.css";

export default function LogingPage() {
  const [formValue, setFormValue] = useState({});

  const handleSubmit = async () => {
    await axios.post("http://localhost:5000/user/login", formValue);
  };

  const handleChange = (event) => {
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="login-container">
      <h2>LOGIN</h2>
      <form className="login-form">
        <TextField
          onChange={(e) => handleChange(e)}
          helperText="Please enter your email"
          id="demo-helper-text-aligned"
          label="Email"
          type="email"
        />

        <TextField
          onChange={(e) => handleChange(e)}
          helperText="Please enter your password"
          id="demo-helper-text-aligned"
          label="Password"
          type="password"
        />
        <Button
          onClick={(event) => {
            event.preventDefault();
            handleSubmit();
          }}
          variant="contained"
          type="submit"
        >
          LOGIN
        </Button>
      </form>
    </div>
  );
}
