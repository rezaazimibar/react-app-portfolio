import { useContext } from "react";
import { grey } from "@mui/material/colors";
import { Tabs, Tab } from "@mui/material";
import {
  HomeRounded,
  Face6Rounded,
  TextSnippetRounded,
  TerminalRounded,
  MessageRounded,
  ConnectWithoutContactRounded,
} from "@mui/icons-material";
import MainContext from "../../context";
const SidebarTabs = () => {
  const { pageNumber, handlePageNumber, setDrawerOpen } = useContext(MainContext);
  const tabProps = (index) => {
    return {
      id: `sidebar-tab-${index}`,
      "aria-controls": `tabpanel-${index}`,
    };
  };
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
        <Tab
          label="صفحه اصلی"
          icon={<HomeRounded />}
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
          {...tabProps(0)}
        />
        <Tab
          label="در باره من"
          icon={<Face6Rounded />}
          iconPosition="start"
          onClick={() => {
            setDrawerOpen(false);
          }}
          {...tabProps(1)}
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
        />
        <Tab
          label="رزومه من"
          icon={<TextSnippetRounded />}
          iconPosition="start"
          onClick={() => setDrawerOpen(false)}
          {...tabProps(2)}
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
        />
        <Tab
          label="نمونه کار ها"
          icon={<TerminalRounded />}
          iconPosition="start"
          onClick={() => setDrawerOpen(false)}
          {...tabProps(3)}
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
        />
        <Tab
          label="نظرات"
          icon={<MessageRounded />}
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
          {...tabProps(4)}
        />
        <Tab
          label="ارتباط با من"
          icon={<ConnectWithoutContactRounded />}
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
          {...tabProps(5)}
        />
      </Tabs>
    </>
  );
};
export default SidebarTabs;
