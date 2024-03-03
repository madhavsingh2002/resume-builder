import { Grid, makeStyles, Paper, Snackbar } from "@mui/material";
import { useState } from "react";
import Confirm from "./Confirm";
import FormPersonalDetails from "./FormPersonalDetails";
import FormUserDetails from "./FormUserDetails";
import StepButtons from "./StepButtons";
import Success from "./Success";
import FormExperienceDetails from "./FormExperienceDetails";
import FormProjectsDetails from "./FormProjectsDetails";
import FormSkillsDetails from "./FormSkillsDetails";
import axios from "axios";
const UserForm = () => {
  // styles hook
  const [openMessage, setOpenMessage] = useState(false); // error message open state
  // form state - step + values.
  const [formValues, setFormValues] = useState({
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    website: "",
    linkedin: "",
    number: "",
    github: "",
    college: "",
    collegefromyear1: "",
    collegetoyear1: "",
    collegequalification1: "",
    collegedescription1: "",
    school: "",
    schoolfromyear2: "",
    schooltoyear2: "",
    schoolqualification2: "",
    schooldescription2: "",
    company1: "",
    company1fromyear1: "",
    company1toyear1: "",
    company1designation: "",
    companydescription1: "",
    company2: "",
    company2fromyear2: "",
    company2toyear2: "",
    company2designation: "",
    companydescription2: "",
    project1: "",
    project1fromyear1: "",
    project1toyear1: "",
    project1designation: "",
    projectdescription1: "",
    project2: "",
    project2fromyear2: "",
    project2toyear2: "",
    project2designation: "",
    projectdescription2: "",
    skill1:"",
    skilldescription1:"",
    skill2:"",
    skilldescription2:"",
    skill3:"",
    skilldescription3:"",
    skill4:"",
    skilldescription4:"",
  });

  // proceed to next step
  const nextStep = () => {
    const { step, firstName, lastName, email, number, college, school } =
      formValues;
    // input validation if empty (step 1 & 2)
    if (step === 1) {
      if (firstName === "" || lastName === "" || email === "" || number === "")
        return setOpenMessage(true);
    }
    if (step === 2) {
      if (college === "" || school === "") return setOpenMessage(true);
    }
    if (step === 3) {
      if (college === "" || school === "") return setOpenMessage(true);
    }
    if (step === 4) {
      if (college === "" || school === "") return setOpenMessage(true);
    }
    // continue if all okay.
    setFormValues((state) => ({ ...state, step: step + 1 }));
  };

  // go back
  const prevStep = () => {
    const { step } = formValues;
    setFormValues((state) => ({ ...state, step: step - 1 }));
  };
 

  // handle fields change

  // sets the error message to false. gets triggered by the component itself after 3000ms
  const handleClose = () => setOpenMessage(false);
  console.log(formValues);
  return (
    <>
      {/* <TopAppBar step={formValues.step} /> */}
      <Grid container justifyContent="center" alignItems="center" style={{}}>
        <Grid
          item
          sx={{
            boxShadow: 1,

            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between", // Align items at the bottom
            // height: "50vh", // Height of the container
            width: "800px",
            // Width of the container
            padding: "20px",
          }}
        >
          <div style={{ flex: 1 }}>
            {formValues.step === 1 && (
              <FormUserDetails
                formValues={formValues}
                setFormValues={setFormValues}
              />
            )}
            {formValues.step === 2 && (
              <FormPersonalDetails
                formValues={formValues}
                setFormValues={setFormValues}
              />
            )}
            {formValues.step === 3 && (
              <FormExperienceDetails
                formValues={formValues}
                setFormValues={setFormValues}
              />
            )}
            {formValues.step === 4 && (
              <FormProjectsDetails
              formValues={formValues}
                setFormValues={setFormValues}
              />
            )}
            {formValues.step === 5 && (
              <FormSkillsDetails
              formValues={formValues}
                setFormValues={setFormValues}
              />
            )}
            {formValues.step === 6 && <Confirm formValues={formValues} />}
            {formValues.step === 7 && (
              <Success formValues={formValues} setFormValues={setFormValues} />
            )}
          </div>
          <br />
          <div style={{ alignSelf: "flex-end", width: "100%" }}>
            <StepButtons
              nextStep={nextStep}
              prevStep={prevStep}
             
              currentStep={formValues.step}
            />
          </div>
        </Grid>

        <Snackbar
          open={openMessage}
          onClose={handleClose}
          autoHideDuration={3000}
          message="Please fill the form"
        />
      </Grid>
    </>
  );
};

export default UserForm;
