import AuthRoute from "./Router/AuthRoute";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/DinRoundPro/dinroundpro.otf";
import "./Styles/fonts.css";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

const theme = createTheme({
    typography: {
        fontFamily: "DIN Round Pro",
    },
    palette: {
        primary: {
            main: "#007EA7",
            light: "#CCDBDC",
            dark: "#003249",
        },
        secondary: {
            main: "#80CED7",
            light: "#9AD1D4",
        },
    },
});
function App() {
    return (
        <ThemeProvider theme={theme}>
        <BrowserRouter>
            <AuthRoute />
        </BrowserRouter>
        </ThemeProvider>
    );
}

export default App
