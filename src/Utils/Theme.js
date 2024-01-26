import createTheme from "@mui/material/styles/createTheme";

const LightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#003F62",
      light: "#E2F4FF",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#ffffff",
      contrastText: "#00000",
    },
    background: {
      paper: "#ffffff",
      default: "#f2f3f5",
    },
  },
  typography: {
    fontFamily: "poppins",
    fontWeight: 800,
  },
});

export { LightTheme };
