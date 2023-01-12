import axios from "axios";
import { useState } from "react";

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
    <form>
      <input
        onChange={(e) => handleChange(e)}
        type="email"
        name="email"
        placeholder="Email"
      />
      <input
        onChange={(e) => handleChange(e)}
        type="password"
        name="password"
        placeholder="Password"
      />
      <button
        onClick={(event) => {
          event.preventDefault();
          handleSubmit();
        }}
        type="submit"
      >
        Login
      </button>
      <span>Forgot Password ?</span>
    </form>
  );
}
