import React from "react";
import { Paper, Box, Grid, List, ListItem, ListItemText } from "@mui/material";
import { useFormContext } from "react-hook-form";
import ControlledCheckboxField from "./controller/ControlledCheckboxField";

export default function Form3() {
  const { register, control, getValues } = useFormContext();
  return (
    <div>
      <Box>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Paper elevation={3}>
              <List sx={{ display: "flex" }}>
                <ListItem>
                  <ListItemText
                    primary="First Name"
                    secondary={getValues("firstName")}
                  />
                  <ListItemText
                    primary="Last Name"
                    secondary={getValues("lastName")}
                  />
                  <ListItemText
                    primary="Email"
                    secondary={getValues("email")}
                  />
                  <ListItemText
                    primary="Password"
                    secondary={getValues("password")}
                  />
                  <ListItemText
                    primary="Mobile"
                    secondary={getValues("mobile")}
                  />
                  <ListItemText
                    primary="Phone"
                    secondary={getValues("phone")}
                  />
                  <ListItemText
                    primary="Date of Birth"
                    secondary={getValues("dob")}
                  />
                  <ListItemText
                    primary="Gender"
                    secondary={getValues("gender")}
                  />
                </ListItem>
              </List>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <ControlledCheckboxField
              label="I agree all information is correct."
              name="agree"
              control={control}
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
