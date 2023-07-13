import { useState } from "react";
import MainLayout from "./components/layouts/MinLayout";
import SideBar from "./components/Slider";
import ContentContainer from "./components/ContentContainer";
import TabPanel from "./components/tabs/TabPanel";
import { Typography } from "@mui/material";

const App = () => {
  const [value, setValue] = useState(0);
  const handleChange = (value, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <MainLayout>
        <SideBar value={value} handleChange={handleChange} />
        <ContentContainer>
          
          <TabPanel value={value} index={0}>
            <Typography variant="h5" sx={{ textAlign: "center" }}>
              صفحه اصلی
            </Typography>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Typography variant="h5" sx={{ textAlign: "center" }}>
              درباره من
            </Typography>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Typography variant="h5" sx={{ textAlign: "center" }}>
              رزومه من
            </Typography>
          </TabPanel>
          <TabPanel value={value} index={3}>
            <Typography variant="h5" sx={{ textAlign: "center" }}>
              نمونه کار ها
            </Typography>
          </TabPanel>
          <TabPanel value={value} index={4}>
            <Typography variant="h5" sx={{ textAlign: "center" }}>
              نظرات
            </Typography>
          </TabPanel>
          <TabPanel value={value} index={5}>
            <Typography variant="h5" sx={{ textAlign: "center" }}>
              ارتباط با من
            </Typography>
          </TabPanel>
        </ContentContainer>
      </MainLayout>
    </>
  );
};

export default App;
