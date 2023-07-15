import { Box, Fab } from "@mui/material";
import { useContext } from "react";
import { red } from "@mui/material/colors";
import MainContext from "../../context";
import { MenuRounded } from "@mui/icons-material";
const DrawerActionButton = () => {
  const { setDrawerOpen } = useContext(MainContext);
  return (
    <>
      <Box
        sx={{
          position: "absolute",
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
    </>
  );
};
export default DrawerActionButton;
