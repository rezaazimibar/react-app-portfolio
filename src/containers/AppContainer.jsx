import { useEffect, useState } from "react";
import MainLayout from "../layouts/MinLayout";
import SideBar from "../components/sidebar/sidebar";
import PagesContainer from "./pagesContainer";
import Page from "../pages/conponent/page";
import { Typography, useMediaQuery } from "@mui/material";
import SwipeableViews from "react-swipeable-views";
import SideBarContainer from "./SidebarContainer";
import MainContext from "../context/index";
import DrawerActionButton from "../components/drawer/drawerActionButton";
import { About, Home, Resume, WorkSamples, Comment } from "../pages/index";
const AppContainer = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mode, setMode] = useState();
  const handlePageNumber = (value, newValue) => {
    setPageNumber(newValue);
  };
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme:dark)");
  useEffect(() => {
    setMode(prefersDarkMode ? "dark" : "light");
  }, []);

  const handleThemeChange = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <>
      <MainContext.Provider
        value={{
          pageNumber,
          handlePageNumber,
          handleThemeChange,
          drawerOpen,
          setDrawerOpen,
        }}
      >
        <MainLayout mode={mode}>
          <SideBarContainer>
            <SideBar />
          </SideBarContainer>
          <DrawerActionButton />

          <PagesContainer>
            <SwipeableViews index={pageNumber} onChange={handlePageNumber}>
              <Page pageNumber={pageNumber} index={0}>
                <Home />
              </Page>
              <Page pageNumber={pageNumber} index={1}>
                <About />
              </Page>
              <Page pageNumber={pageNumber} index={2}>
                <Typography variant="h5" sx={{ textAlign: "center" }}>
                  <Resume helmetTitle="وبسات رضا عظیمی|رزومه" />
                </Typography>
              </Page>
              <Page pageNumber={pageNumber} index={3}>
                <Typography variant="h5" sx={{ textAlign: "center" }}>
                  <WorkSamples helmetTitle="وبسایت رضا عظیمی|نمونه کار ها" />
                </Typography>
              </Page>
              <Page pageNumber={pageNumber} index={4}>
                <Typography variant="h5" sx={{ textAlign: "center" }}>
                  <Comment helmetTitle="وبسایت رضاعظیمی|نظرات" />
                </Typography>
              </Page>
              <Page pageNumber={pageNumber} index={5}>
                <Typography variant="h5" sx={{ textAlign: "center" }}>
                  ارتباط با من
                </Typography>
              </Page>
            </SwipeableViews>
          </PagesContainer>
        </MainLayout>
      </MainContext.Provider>
    </>
  );
};

export default AppContainer;
