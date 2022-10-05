import React from "react";
import {
  TextField,
  Box,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Stack,
  Button,
} from "@mui/material";

export default function Form1() {
  function handleChange() {
    console.log("gender changed");
  }
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
            <TextField
              label="Passowrd"
              variant="filled"
              type="password"
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Confirm Passowrd"
              variant="filled"
              type="password"
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField label="Mobile" variant="filled" fullWidth />
          </Grid>
          <Grid item xs={6}>
            <TextField label="Phone" variant="filled" fullWidth />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Data of Birth"
              type="date"
              variant="filled"
              InputLabelProps={{ shrink: true }}
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel id="gender-label">Gender</InputLabel>
              <Select
                labelId="gender-label"
                value={""}
                label="Gender"
                variant="filled"
                onChange={handleChange}
              >
                <MenuItem value={"male"}>Male</MenuItem>
                <MenuItem value={"female"}>Female</MenuItem>
                <MenuItem value={"other"}>Other</MenuItem>
                <MenuItem value={"prefer_not_to_say"}>
                  Prefer not to say
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
