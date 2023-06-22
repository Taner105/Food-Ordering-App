import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffbe33",
    },
    secondary: {
      main: "#222831",
    },
    success: {
      main: "#2e7d32",
    },
    error: {
      main: "#d32f2f",
    },
  },

  typography: {
    fontFamily: "'Ubuntu', sans-serif",
  },
});

export default theme;
