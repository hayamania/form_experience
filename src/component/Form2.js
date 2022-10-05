import React from "react";
import {
  TextField,
  Box,
  Grid,
  FormGroup,
  FormControlLabel,
  Checkbox,
  InputLabel,
  Stack,
} from "@mui/material";

export default function Form2() {
  return (
    <div>
      <Box
      // display="flex"
      // justifyContent="center"
      // alignItems="center"
      // sx={{
      //   "& > :not(style)": { m: 1, width: "600px" },
      // }}
      >
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <TextField label="Present Position" variant="filled" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Qualification1" variant="filled" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Qualification2" variant="filled" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <FormGroup>
              <InputLabel>Technical Skills</InputLabel>
              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <FormControlLabel control={<Checkbox />} label="HTML" />
                <FormControlLabel control={<Checkbox />} label="CSS" />
                <FormControlLabel control={<Checkbox />} label="Bootstrap" />
                <FormControlLabel control={<Checkbox />} label="React" />
                <FormControlLabel control={<Checkbox />} label="SASS" />
                <FormControlLabel control={<Checkbox />} label="Angler" />
              </Stack>
              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <FormControlLabel control={<Checkbox />} label="MySQL" />
                <FormControlLabel control={<Checkbox />} label="PHP" />
                <FormControlLabel control={<Checkbox />} label="Python" />
                <FormControlLabel control={<Checkbox />} label="Ruby" />
                <FormControlLabel control={<Checkbox />} label="C#" />
                <FormControlLabel control={<Checkbox />} label="Java" />
              </Stack>
            </FormGroup>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
