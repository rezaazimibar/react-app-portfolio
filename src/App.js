import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import { Button } from "@mui/material";

const theme = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: "Vazir , Roboto",
  },
});
const cacheRTL = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});
function App() {
  return (
    <CacheProvider value={cacheRTL}>
      {" "}
      <ThemeProvider theme={theme}>
        <HelmetProvider>
          <Helmet>
            <title>وب سایت </title>
          </Helmet>
          <div className="App">
            <Button variant="contained">کلید کنید</Button>
          </div>
        </HelmetProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;
