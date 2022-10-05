import React, { useState } from "react";
import { Box, Button, Stack, Stepper, Step, StepLabel } from "@mui/material";
import Form1 from "./Form1";
import Form2 from "./Form2";
import Form3 from "./Form3";

export default function FormMain() {
  const [step, setStep] = useState(0);
  const [titles, setTitles] = useState([
    "Personal Information",
    "Professional Information",
    "Confirm your input",
  ]);
  const ShowForm = () => {
    switch (step) {
      case 0:
        return <Form1 />;
      case 1:
        return <Form2 />;
      case 2:
        return <Form3 />;
    }
  };
  return (
    <div className="FormMain">
      <Box
        justifyContent="center"
        alignItems="center"
        sx={{
          "& > :not(style)": { m: 1, width: "600px" },
        }}
      >
        <h1>Welcome to Chie HYM club. </h1>
        <p>Please fill your information to register.</p>
        <div>
          <Stepper activeStep={step}>
            {titles.map((title, index) => {
              return (
                <Step key={index}>
                  <StepLabel>{title}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
        </div>
        <div>{titles[step]}</div>
        {ShowForm()}
        <div>
          <Stack
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
          >
            <Button
              onClick={() => {
                setStep((previouse) => previouse - 1);
              }}
              variant="outlined"
              disabled={step === 0 ? true : false}
            >
              Back
            </Button>
            <Button
              variant="outlined"
              onClick={() => {
                setStep((previouse) => previouse + 1);
              }}
              disabled={step === titles.length - 1 ? true : false}
            >
              {step === titles.length - 1 ? "Submit" : "Next"}
            </Button>
          </Stack>
        </div>
      </Box>
    </div>
  );
}
