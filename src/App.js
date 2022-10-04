import "./App.css";
import { Box, Button, Stack } from "@mui/material";
import Form1 from "./Form1";
import Form2 from "./Form2";
import Form3 from "./Form3";

function App() {
  return (
    <div className="App">
      <Box m={2}>
        <h1>Welcome to Chie HYM club. </h1>
        <p>Please fill your information to register.</p>
        <Form1 />
        <Form2 />
        <Form3 />
        <Stack
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <Button variant="outlined">Back</Button>
          <Button variant="outlined">Next</Button>
        </Stack>
      </Box>
    </div>
  );
}

export default App;
