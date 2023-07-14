import { useState } from "react";
import MainLayout from "../layouts/MinLayout";
import SideBar from "../components/sidebar/sidebar";
import ContentContainer from "./ContentContainer";
import TabPanel from "../components/TabPanel";
import { Typography } from "@mui/material";
import SideBarContainer from "./SidebarContainer";
import MainContext from "../context/index";
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
            <SideBar/>
          </SideBarContainer>

          <ContentContainer>
            <TabPanel pageNumber={pageNumber} index={0}>
              <Typography variant="h5" sx={{ textAlign: "center" }}>
                صفحه اصلی
              </Typography>
            </TabPanel>
            <TabPanel pageNumber={pageNumber} index={1}>
              <Typography variant="h5" sx={{ textAlign: "center" }}>
                درباره من
              </Typography>
            </TabPanel>
            <TabPanel pageNumber={pageNumber} index={2}>
              <Typography variant="h5" sx={{ textAlign: "center" }}>
                رزومه من
              </Typography>
            </TabPanel>
            <TabPanel pageNumber={pageNumber} index={3}>
              <Typography variant="h5" sx={{ textAlign: "center" }}>
                نمونه کار ها
              </Typography>
            </TabPanel>
            <TabPanel pageNumber={pageNumber} index={4}>
              <Typography variant="h5" sx={{ textAlign: "center" }}>
                نظرات
              </Typography>
            </TabPanel>
            <TabPanel pageNumber={pageNumber} index={5}>
              <Typography variant="h5" sx={{ textAlign: "center" }}>
                ارتباط با من
              </Typography>
            </TabPanel>
          </ContentContainer>
        </MainLayout>
      </MainContext.Provider>
    </>
  );
};

export default AppContainer;
