import React, { useState } from "react";
import { Box, Button, Stack } from "@mui/material";
import Form1 from "./Form1";
import Form2 from "./Form2";
import Form3 from "./Form3";

export default function FormMain() {
  const [step, setStep] = useState(0);
  const [title, setTitle] = useState([
    "Personal Information",
    "Professional Information",
    "Confirm your input",
  ]);
  const ShowForm = () => {
    if (step === 0) {
      return <Form1 />;
    } else if (step === 1) {
      return <Form2 />;
    } else {
      return <Form3 />;
    }
  };
  return (
    <div className="FormMain">
      <Box m={2}>
        <h1>Welcome to Chie HYM club. </h1>
        <p>Please fill your information to register.</p>
        <div>{title[step]}</div>
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
              disabled={step === title.length - 1 ? true : false}
            >
              {step === title.length - 1 ? "Submit" : "Next"}
            </Button>
          </Stack>
        </div>
      </Box>
    </div>
  );
}
