import React from "react";
import axios from "axios";

// eslint-disable-next-line react/prop-types
function RegisterIndividual({ handleChange, formValue }) {
  const info = [
    { type: "text", name: "firstname", placeholder: "First Name" },
    { type: "text", name: "lastname", placeholder: "Last Name" },
    { type: "text", name: "licence", placeholder: "Licence" },
    { type: "text", name: "description", placeholder: "Description" },
    { type: "email", name: "email", placeholder: "Email Address" },
    { type: "password", name: "password", placeholder: "Password" },
    {
      type: "password",
      name: "confirmPassword",
      placeholder: "Confirm Password",
    },
  ];

  const handleSubmit = async () => {
    await axios.post("http://localhost:5000/user/individual", formValue);
  };

  return (
    <div>
      <h2>Individual</h2>

      <form>
        <h1>Hello !</h1>
        {info.map((element) => (
          <div>
            <input
              onChange={handleChange}
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

export default RegisterIndividual;
