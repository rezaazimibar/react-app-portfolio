import { ThemeProvider, Typography } from "@mui/material";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";

import Grid from "@mui/material/Unstable_Grid2";

import SideBar from "../Slider";
import { theme } from "../UI/theme";

import ContentContainer from "../ContentContainer";

const cacheRTL = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});
const MainLayout = ({ children }) => {
  return (
    <>
      <CacheProvider value={cacheRTL}>
        <ThemeProvider theme={theme}>
          <HelmetProvider>
            <Helmet>
              <title>وب سایت </title>
            </Helmet>
            <Grid container sx={{ height: "100vh" }}>
              {children}
            </Grid>
          </HelmetProvider>
        </ThemeProvider>
      </CacheProvider>
    </>
  );
};
export default MainLayout;
