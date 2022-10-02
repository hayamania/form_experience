import React from "react";
import { TextField, Box, Grid } from "@mui/material";

export default function Form1() {
  return (
    <div>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{
          "& > :not(style)": { m: 1, width: "600px" },
        }}
      >
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <TextField label="Firstname" variant="filled" fullWidth />
          </Grid>
          <Grid item xs={6}>
            <TextField label="Lastname" variant="filled" fullWidth />
          </Grid>
          <Grid item xs={6}>
            <TextField label="Email" variant="filled" fullWidth />
          </Grid>
          <Grid item xs={6}>
            <TextField label="Confirm Email" variant="filled" fullWidth />
          </Grid>
          <Grid item xs={6}>
            <TextField label="Passowrd" variant="filled" fullWidth />
          </Grid>
          <Grid item xs={6}>
            <TextField label="Passowrd Email" variant="filled" fullWidth />
          </Grid>
          <Grid item xs={6}>
            <TextField label="Mobile" variant="filled" fullWidth />
          </Grid>
          <Grid item xs={6}>
            <TextField label="Phone" variant="filled" fullWidth />
          </Grid>
          <Grid item xs={6}>
            <TextField label="Data of Birth" variant="filled" fullWidth />
          </Grid>
          <Grid item xs={6}>
            <TextField label="Gender" variant="filled" fullWidth />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
