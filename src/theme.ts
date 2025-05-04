import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#0d1137",
    },
    secondary: {
      main: "#333333",
    },
    background: {
      default: "#FBFBFB",
    },
  },
  typography: {
    fontFamily: '"Morvarid"',
    // You can define global font weights:
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    // And/or per variant:
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 500,
    },
    body1: {
      fontWeight: 400,
    },
    // ...add for other variants as needed
  },
});
