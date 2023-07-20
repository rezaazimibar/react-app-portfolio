import { grey } from "@mui/material/colors";
import { Box, Divider } from "@mui/material";
import SidebarHeader from "./sidebarHeader";
import SidebarFooter from "./sidebarFooter";
import SidebarTabs from "./SidebarTabs";

const SidebarContent = () => {

  return (
    <>
      <Box
        sx={{ textAlign: "center", justifyContent: "center", width: "15rem" }}
      >
        <SidebarHeader />

        <Divider variant="middle" color={grey[900]} />
        <SidebarTabs />
        <Divider variant="middle" color={grey[900]} sx={{ mt: 2 }} />
        <SidebarFooter />
      </Box>
    </>
  );
};
export default SidebarContent;
