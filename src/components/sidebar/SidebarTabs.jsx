import { useContext } from "react";
import { grey } from "@mui/material/colors";
import { Tabs, Tab } from "@mui/material";
import { tabsData } from "../data/tabsData.sidebar";
import MainContext from "../../context";
const SidebarTabs = () => {
  const { pageNumber, handlePageNumber, setDrawerOpen } =
    useContext(MainContext);

  const data = tabsData();
  return (
    <>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        scrollButtons="auto"
        allowScrollButtonsMobile
        value={pageNumber}
        onChange={handlePageNumber}
      >
        {data.map((tab, index) => (
          <Tab
            key={index}
            label={tab.label}
            icon={tab.icon}
            iconPosition="start"
            sx={{
              "&.MuiTab-root": {
                minHeight: 50,
                backgroundColor: grey[800],
                my: 0.5,
                mx: 1,
                borderRadius: 2,
                boxShadow: 3,
              },
            }}
            onClick={() => setDrawerOpen(false)}
            {...tab}
          />
        ))}
      </Tabs>
    </>
  );
};
export default SidebarTabs;
