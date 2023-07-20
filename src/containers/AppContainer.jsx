import { useState } from "react";
import MainLayout from "../layouts/MinLayout";
import SideBar from "../components/sidebar/sidebar";
import PagesContainer from "./pagesContainer";
import Page from "../pages/conponent/page";
import { Typography } from "@mui/material";
import SwipeableViews from "react-swipeable-views";
import SideBarContainer from "./SidebarContainer";
import MainContext from "../context/index";
import DrawerActionButton from "../components/drawer/drawerActionButton";
import { About, Home, Resume, WorkSamples } from "../pages/index";
const AppContainer = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const handlePageNumber = (value, newValue) => {
    setPageNumber(newValue);
  };
  return (
    <>
      <MainContext.Provider
        value={{ pageNumber, handlePageNumber, drawerOpen, setDrawerOpen }}
      >
        <MainLayout>
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
                  نظرات
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
