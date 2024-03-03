import { Button, Grid, TextField, Typography } from  "@mui/material";


const FormExperienceDetails = ({   experience,
  index,
  handleChange,
  handleRemoveExperience,
}) =>{ 

  return(
  <Grid container spacing={2} alignItems="center" lg={12} key={index}>
    <Grid item md={4} sm={12} xs={12} lg={4}>
      <TextField
        margin="dense"
        variant="outlined"
        name={`company${index + 1}`}
        label={`Company ${index + 1}`}
        style={{ width: '80%' }}
        required
        value={experience.company}
        onChange={(e) => handleChange(index, 'company', e.target.value)}
      />
    </Grid>

    <Grid item md={4} sm={6} xs={12} lg={4}>
      <TextField
        margin="dense"
        variant="outlined"
        name={`fromYear${index + 1}`}
        type="date"
        style={{ width: '80%' }}
        required
        value={experience.fromYear}
        onChange={(e) => handleChange(index, 'fromYear', e.target.value)}
      />
    </Grid>

    <Grid item md={4} sm={6} xs={12} lg={4}>
      <TextField
        margin="dense"
        variant="outlined"
        name={`toYear${index + 1}`}
        type="date"
        style={{ width: '80%' }}
        required
        value={experience.toYear}
        onChange={(e) => handleChange(index, 'toYear', e.target.value)}
      />
    </Grid>

    <Grid item md={4} sm={12} xs={12} lg={4}>
      <TextField
        margin="dense"
        label={`Designation ${index + 1}`}
        variant="outlined"
        style={{ width: '80%' }}
        name={`designation${index + 1}`}
        required
        value={experience.designation}
        onChange={(e) => handleChange(index, 'designation', e.target.value)}
      />
    </Grid>

    <Grid item md={8} sm={12} xs={12} lg={8}>
      <TextField
        margin="dense"
        label={`Description ${index + 1}`}
        variant="outlined"
        style={{ width: '90%' }}
        name={`description${index + 1}`}
        required
        value={experience.description}
        onChange={(e) => handleChange(index, 'description', e.target.value)}
      />
    </Grid>

    <Grid item md={2} sm={6} xs={12} lg={2}>
      <Button
        variant="outlined"
        color="secondary"
        onClick={() => handleRemoveExperience(index)}
      >
        Delete
      </Button>
    </Grid>
  </Grid>
);
};

export default FormExperienceDetails;
