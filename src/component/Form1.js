import React from "react";
import { Box, Grid } from "@mui/material";
import { useFormContext } from "react-hook-form";
import ControlledTextField from "./controller/ControlledTextField";
import ControlledDateField from "./controller/ControlledDateField";
import ControlledSelectField from "./controller/ControlledSelectField";

export default function Form1() {
  const { register, control } = useFormContext();
  const genderOption = [
    { key: "male", value: "male", text: "Male" },
    { key: "female", value: "female", text: "Female" },
    { key: "other", value: "other", text: "Other" },
    {
      key: "prefer_not_to_say",
      value: "prefer_not_to_say",
      text: "Prefer not to say",
    },
  ];
  return (
    <div>
      <Box>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <ControlledTextField
              label="First Name"
              name="firstName"
              control={control}
            />
          </Grid>
          <Grid item xs={6}>
            <ControlledTextField
              label="Last Name"
              name="lastName"
              control={control}
            />
          </Grid>
          <Grid item xs={6}>
            <ControlledTextField label="Email" name="email" control={control} />
          </Grid>
          <Grid item xs={6}>
            <ControlledTextField
              label="Confirm Email"
              name="emailc"
              control={control}
            />
          </Grid>
          <Grid item xs={6}>
            <ControlledTextField
              label="Passowrd"
              name="password"
              type="password"
              control={control}
            />
          </Grid>
          <Grid item xs={6}>
            <ControlledTextField
              label="Confirm Passowrd"
              name="passwordc"
              type="password"
              control={control}
            />
          </Grid>
          <Grid item xs={6}>
            <ControlledTextField
              label="Mobile"
              name="mobile"
              type="number"
              control={control}
            />
          </Grid>
          <Grid item xs={6}>
            <ControlledTextField
              label="Phone"
              name="phone"
              type="number"
              control={control}
            />
          </Grid>
          <Grid item xs={6}>
            <ControlledDateField
              label="Data of Birth"
              name="dob"
              control={control}
            />
          </Grid>
          <Grid item xs={6}>
            <ControlledSelectField
              label="Gender"
              name="gender"
              options={genderOption}
              control={control}
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
