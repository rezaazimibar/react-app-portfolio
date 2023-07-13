import Grid from "@mui/material/Unstable_Grid2";
import { useState } from "react";
import { Drawer, Fab, Box } from "@mui/material";
import { grey, red } from "@mui/material/colors";
import DrawerContent from "./UI/DrawerContent";
import { MenuRounded } from "@mui/icons-material";
const SideBar = ({ value, handleChange }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <Grid
        xs={0}
        sm={0}
        md={3}
        lg={2}
        xl={2}
        sx={{ backgroundColor: grey[900] }}
      >
        <Box
          sx={{
            display: {
              xs: "block",
              sm: "block",
              md: "none",
              lg: "none",
              xl: "none",
            },
          }}
        >
          <Fab
            color={red[500]}
            aria-label="sideBare"
            size="small"
            sx={{ m: 2 }}
            onClick={() => setDrawerOpen(true)}
          >
            <MenuRounded />
          </Fab>
        </Box>
        <DrawerContent value={value} handleChange={handleChange} />
        <Drawer
          open={drawerOpen}
          variant="temporary"
          onClose={() => {
            setDrawerOpen(false);
          }}
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
          <DrawerContent
            value={value}
            handleChange={handleChange}
            setDrawerOpen={setDrawerOpen}
          />
        </Drawer>
      </Grid>
    </>
  );
};
export default SideBar;
