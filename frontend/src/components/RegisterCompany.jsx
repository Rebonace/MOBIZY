import React from "react";
import axios from "axios";

// eslint-disable-next-line react/prop-types
function RegisterCompany({ handleChange, formValue }) {
  const info = [
    { type: "text", name: "name", placeholder: "Name" },
    { type: "email", name: "email", placeholder: "Email Address" },
    { type: "text", name: "description", placeholder: "Description" },
    { type: "password", name: "password", placeholder: "Password" },
    {
      type: "password",
      name: "confirmPassword",
      placeholder: "Confirm Password",
    },
  ];

  const handleSubmit = async () => {
    await axios.post("http://localhost:5000/user/company", formValue);
  };

  return (
    <div>
      <h2>Company</h2>
      <form>
        <h1>Hello !</h1>
        {info.map((element) => (
          <div>
            <input
              onChange={(e) => handleChange(e)}
              type={element.type}
              name={element.name}
              key={element.name}
              placeholder={element.placeholder}
            />
          </div>
        ))}
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
    </div>
  );
}

export default RegisterCompany;
