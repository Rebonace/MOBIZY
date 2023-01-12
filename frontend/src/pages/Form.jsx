import { useState } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import RegisterCompany from "../components/RegisterCompany";
import RegisterIndividual from "../components/RegisterIndividual";
import "./Form.css";

export default function Form() {
  const [companyOrIndividual, setCompanyOrIndividual] = useState(false);
  const [formValue, setFormValue] = useState({});

  const handleChange = (event) => {
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="register-container">
      <Box
        className="form-register"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          "& > *": {
            m: 1,
          },
        }}
      >
        <ButtonGroup variant="text" aria-label="text button group">
          <Button
            type="button"
            onClick={() => {
              setFormValue({});
              setCompanyOrIndividual(!companyOrIndividual);
            }}
          >
            Company OR Individual
          </Button>
        </ButtonGroup>
        {companyOrIndividual ? (
          <RegisterIndividual
            handleChange={handleChange}
            formValue={formValue}
          />
        ) : (
          <RegisterCompany handleChange={handleChange} formValue={formValue} />
        )}
      </Box>
    </div>
  );
}
