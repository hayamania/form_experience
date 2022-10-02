import "./App.css";
import { Box, Button, Stack } from "@mui/material";
import Form1 from "./Form1";

function App() {
  return (
    <div className="App">
      <Box>
        <h1>Welcome to Chie HYM club. </h1>
        <p>Please fill your information to register.</p>
        <Form1 />
      </Box>
      <Stack direction="row">
        <Button variant="outlined">Back</Button>
        <Button variant="outlined">Next</Button>
      </Stack>
    </div>
  );
}

export default App;
