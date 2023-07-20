import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
  direction: "rtl",
  palette: {
    mode: "light",
  },
  typography: {
    fontFamily: "tanha,Vazir , Roboto",
    h1: {
      fontSize: "2rem",
    },
  },
});
export const darkTheme = createTheme({
  direction: "rtl",
  palette: {
    mode: "dark",
  },
  typography: {
    fontFamily: "tanha,Vazir , Roboto",
    h1: {
      fontSize: "2rem",
    },
  },
});
