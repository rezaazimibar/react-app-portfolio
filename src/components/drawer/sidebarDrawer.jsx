import { useContext } from "react";
import MainContext from "../../context";
import { Drawer } from "@mui/material";
import SidebarContent from "../sidebar/sidebarContent";

const SidebarDrawer = () => {
  const { drawerOpen, setDrawerOpen } = useContext(MainContext);
  return (
    <>
      <Drawer
        open={drawerOpen}
        variant="temporary"
        onClose={() => setDrawerOpen(false)}
        sx={{
          "& .MuDrawer-paper": {
            width: 400,
          },
          display: {
            lg: "none",
            md: "none",
            sm: "block",
            xs: "block",
          },
        }}
      >
        <SidebarContent />
      </Drawer>
    </>
  );
};
export default SidebarDrawer;
