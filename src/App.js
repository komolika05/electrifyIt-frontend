import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout.js";
import Reports from "./Reports/Reports.js";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { deDE } from "@mui/x-date-pickers/locales";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: "#ffffff",
    },
    background: {
      paper: "black",
      default: "ffffff",
    },
    text: {
      primary: "white",
      secondary: "white",
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          borderColor: "red",
        },
      },
    },
    // border: {
    //   paper: "#ffffff",
    //   default: "#ffffff"
    // }
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/overview" element={<></>} />
          <Route path="/vehicles" element={<></>} />
          <Route path="/chargers" element={<></>} />
          <Route path="/drivers" element={<></>} />
          <Route path="/schedules" element={<></>} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/adminpanel" element={<></>} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;

