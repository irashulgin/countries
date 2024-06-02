import Box from "@mui/material/Box";
import "./App.css";
import Countries from "./pages/Countries";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box className="App">
        <Countries />
      </Box>
    </ThemeProvider>
  );
}

export default App;
