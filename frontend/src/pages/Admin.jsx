import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./Admin.css";

export default function Admin() {
  return (
    <div className="admin-container">
      <h2>ADMIN</h2>
      <form className="admin-form">
        <TextField
          helperText="Please enter your email"
          id="demo-helper-text-aligned"
          label="Email"
          type="email"
        />

        <TextField
          helperText="Please enter your password"
          id="demo-helper-text-aligned"
          label="Password"
          type="password"
        />
        <Button variant="contained" type="submit">
          LOGIN
        </Button>
      </form>
    </div>
  );
}
