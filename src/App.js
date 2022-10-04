import "./App.css";
import { Box, Button, Stack } from "@mui/material";
import Form1 from "./Form1";
import Form2 from "./Form2";

function App() {
  return (
    <div className="App">
      <Box>
        <h1>Welcome to Chie HYM club. </h1>
        <p>Please fill your information to register.</p>
        <Form1 />
        <Form2 />
      </Box>
      <Stack direction="row">
        <Button variant="outlined">Back</Button>
        <Button variant="outlined">Next</Button>
      </Stack>
    </div>
  );
}

export default App;
