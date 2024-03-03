import { Button, Grid, makeStyles, Paper, Snackbar } from "@mui/material";
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
  const [openMessage, setOpenMessage] = useState(false);
  const [formValues, setFormValues] = useState({
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    website: '',
    linkedin: '',
    number: '',
    github: '',
    college: '',
    collegefromyear1: '',
    collegetoyear1: '',
    collegequalification1: '',
    collegedescription1: '',
    school: '',
    schoolfromyear2: '',
    schooltoyear2: '',
    schoolqualification2: '',
    schooldescription2: '',
    experiences: [
      {
        company: '',
        fromYear: '',
        toYear: '',
        designation: '',
        description: '',
      },
    ],
    project1: '',
    project1fromyear1: '',
    project1toyear1: '',
    project1designation: '',
    projectdescription1: '',
    project2: '',
    project2fromyear2: '',
    project2toyear2: '',
    project2designation: '',
    projectdescription2: '',
    skill1: '',
    skilldescription1: '',
    skill2: '',
    skilldescription2: '',
    skill3: '',
    skilldescription3: '',
    skill4: '',
    skilldescription4: '',
  });
// Add handleChange function here
const handleChange = (index, fieldName, value) => {
  setFormValues((prevState) => {
    const updatedExperiences = [...prevState.experiences];
    updatedExperiences[index] = {
      ...updatedExperiences[index],
      [fieldName]: value,
    };
    return { ...prevState, experiences: updatedExperiences };
  });
};
  const nextStep = () => {
    const { step, firstName, lastName, email, number, college, school } = formValues;

    // Step 1 validation
    if (step === 1) {
      if (firstName === '' || lastName === '' || email === '' || number === '') {
        return setOpenMessage(true); // Display error message
      }
    }

    // Step 2 validation
    if (step === 2) {
      if (college === '' || school === '') {
        return setOpenMessage(true); // Display error message
      }
    }

    // Additional validation for other steps if needed...

    // Proceed to the next step
    setFormValues((prevState) => ({ ...prevState, step: step + 1 }));
  };

  const prevStep = () => {
    const { step } = formValues;

    // Step decrement logic
    if (step > 1) {
      setFormValues((prevState) => ({ ...prevState, step: step - 1 }));
    }
  };

  const handleAddExperience = () => {
    setFormValues((prevState) => ({
      ...prevState,
      experiences: [
        ...prevState.experiences,
        {
          company: '',
          fromYear: '',
          toYear: '',
          designation: '',
          description: '',
        },
      ],
    }));
  };

  const handleRemoveExperience = (index) => {
    setFormValues((prevState) => ({
      ...prevState,
      experiences: prevState.experiences.filter((_, i) => i !== index),
    }));
  };

  const handleClose = () => setOpenMessage(false);

  return (
    <>
      <Grid container justifyContent="center" alignItems="center">
        <Grid
          item
          sx={{
            boxShadow: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: '800px',
            padding: '20px',
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
              <>
                {formValues.experiences.map((experience, index) => (
                  <FormExperienceDetails
                    key={index}
                    experience={experience}
                    index={index}
                    formValues={formValues}
                    handleChange={(fieldName, value) =>
                      // eslint-disable-next-line no-undef
                      handleChange(index, fieldName, value)
                    }
                    handleRemoveExperience={handleRemoveExperience}
                  />
                ))}
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleAddExperience}
                >
                  Add Experience
                </Button>
              </>
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
          <div style={{ alignSelf: 'flex-end', width: '100%' }}>
            {/* Buttons for navigating through steps */}
            <Button
              variant="contained"
              color="primary"
              onClick={nextStep}
              style={{ marginRight: '10px' }}
            >
              Next
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={prevStep}
              style={{ marginRight: '10px' }}
            >
              Back
            </Button>
          </div>
        </Grid>

        {/* Snackbar for displaying error message */}
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
