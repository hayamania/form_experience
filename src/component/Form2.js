import React from "react";
import {
  Box,
  Grid,
  FormGroup,
  FormControlLabel,
  Checkbox,
  InputLabel,
  Stack,
} from "@mui/material";
import { useFormContext } from "react-hook-form";
import ControlledTextField from "./controller/ControlledTextField";
import ControlledCheckboxField from "./controller/ControlledCheckboxField";

export default function Form2() {
  const { register, control } = useFormContext();
  return (
    <div>
      <Box>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <ControlledTextField
              label="Present Position"
              name="position"
              control={control}
            />
          </Grid>
          <Grid item xs={12}>
            <ControlledTextField
              label="Qualification1"
              name="qualification1"
              control={control}
            />
          </Grid>
          <Grid item xs={12}>
            <ControlledTextField
              label="Qualification2"
              name="qualification2"
              control={control}
            />
          </Grid>
          <Grid item xs={12}>
            <FormGroup>
              <InputLabel>Technical Skills</InputLabel>
              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <ControlledCheckboxField
                  label="HTML"
                  name="skills.HTML"
                  control={control}
                />
                <ControlledCheckboxField
                  label="CSS"
                  name="skills.CSS"
                  control={control}
                />
                <FormControlLabel control={<Checkbox />} label="Bootstrap" />
                <ControlledCheckboxField
                  label="Bootstrap"
                  name="skills.Bootstrap"
                  control={control}
                />
                <ControlledCheckboxField
                  label="React"
                  name="skills.React"
                  control={control}
                />
                <ControlledCheckboxField
                  label="SASS"
                  name="skills.SASS"
                  control={control}
                />
                <ControlledCheckboxField
                  label="Angler"
                  name="skills.Angler"
                  control={control}
                />
              </Stack>
              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <ControlledCheckboxField
                  label="MySQL"
                  name="skills.MySQL"
                  control={control}
                />
                <ControlledCheckboxField
                  label="PHP"
                  name="skills.PHP"
                  control={control}
                />
                <ControlledCheckboxField
                  label="Python"
                  name="skills.Python"
                  control={control}
                />
                <ControlledCheckboxField
                  label="Ruby"
                  name="skills.Ruby"
                  control={control}
                />
                <ControlledCheckboxField
                  label="C#"
                  name="skills.C"
                  control={control}
                />
                <ControlledCheckboxField
                  label="Java"
                  name="skills.Java"
                  control={control}
                />
              </Stack>
            </FormGroup>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
