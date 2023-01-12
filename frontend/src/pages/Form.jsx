import { useState } from "react";
import RegisterIndividual from "../components/RegisterIndividual";
import RegisterCompany from "../components/RegisterCompany";

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
    <>
      <button
        type="button"
        onClick={() => {
          setFormValue({});
          setCompanyOrIndividual(!companyOrIndividual);
        }}
      >
        Company Or Individual ?
      </button>
      {companyOrIndividual ? (
        <RegisterIndividual handleChange={handleChange} formValue={formValue} />
      ) : (
        <RegisterCompany handleChange={handleChange} formValue={formValue} />
      )}
      ;
    </>
  );
}
