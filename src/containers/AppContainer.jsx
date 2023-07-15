import { useState } from "react";
import MainLayout from "../layouts/MinLayout";
import SideBar from "../components/sidebar/sidebar";
import PagesContainer from "./pagesContainer";
import Page from "../pages/conponent/page";
import { Box, Typography } from "@mui/material";
import SwipeableViews from "react-swipeable-views";
import SideBarContainer from "./SidebarContainer";
import MainContext from "../context/index";
import DrawerActionButton from "../components/drawer/drawerActionButton";
import {Home} from "../pages/index";
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
                <Typography variant="h5" sx={{ textAlign: "center" }}>
                  درباره من
                </Typography>
              </Page>
              <Page pageNumber={pageNumber} index={2}>
                <Typography variant="h5" sx={{ textAlign: "center" }}>
                  رزومه من
                </Typography>
              </Page>
              <Page pageNumber={pageNumber} index={3}>
                <Typography variant="h5" sx={{ textAlign: "center" }}>
                  نمونه کار ها
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
