import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";


import PermanentDrawerLeft from "./components/sidebar/sidebar";

// To override the default styling use below
const theme = createTheme({
  typography: {
    fontFamily: ["Poppins"].join(","),
    fontWeightLight: "300",
    fontWeightRegular: "400",
    fontWeightBold: "500",
  },
  palette: {
    mode: "light",
    primary: {
      main: "#fff",
    },
    // secondary: {
    //   main: "#1185CB",
    // },
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>

          <PermanentDrawerLeft />

      </ThemeProvider>
    </>
  );
}

export default App;
