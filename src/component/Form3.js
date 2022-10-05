import React from "react";
import { Paper, Box, Grid, FormControlLabel, Checkbox } from "@mui/material";

export default function Form3() {
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
          <Grid item xs={12}>
            <Paper elevation={3}>test</Paper>
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox />}
              label="I agree all information is correct."
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
