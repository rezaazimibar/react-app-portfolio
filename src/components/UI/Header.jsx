import {
  AppBar,
  Button,
  Toolbar,
  useScrollTrigger,
  Typography,
} from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";

import logo from "../../assets/logo.svg";



const CustomBut = styled(Button)`
  color: lime;
`;

const Header = () => {
  function ElevationScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
    });

    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }

  return (
    <>
      <ElevationScroll>
        <AppBar position="static">
          <Toolbar disableGutters>
            <CustomBut variant="contained" color="primary">
              کلیک کنید
            </CustomBut>
            <Typography variant="h1">این متن هدر است</Typography>
            
            <img src={logo} alt="لوگوی سایت" style={{ width: "5rem" }} />
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </>
  );
};
export default Header;
