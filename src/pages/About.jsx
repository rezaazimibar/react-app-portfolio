import { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Divider,
  Chip,
  Avatar,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import Grid from "@mui/material/Unstable_Grid2";
import man from "../assets/man.png";
import DevInfo from "./conponent/DevInfo";
import {
  CodeRounded,
  KeyboardArrowLeftRounded,
  StayPrimaryLandscape,
  VerticalAlignBottom,
} from "@mui/icons-material";
const About = () => {
  return (
    <>
      <Card
        sx={{
          height: "100vh",
          backgroundColor: "whitesmoke",
        }}
      >
        <CardContent>
          <Grid container sx={{ mx: 3 }}>
            <Grid xs={12} sm={12} md={8} lg={8} xl={8}>
              <Divider textAlign="right">
                <Chip
                  icon={<CodeRounded />}
                  color="primary"
                  label={
                    <Typography
                      variant="body1"
                      color="black"
                      sx={{ textAlign: "center" }}
                    >
                      توسعه دهنده فول استک
                    </Typography>
                  }
                  sx={{ p: 3 }}
                ></Chip>
              </Divider>
              <DevInfo>نام و نام خانوادگی:رضا عظیمی</DevInfo>
              <DevInfo>سن:30</DevInfo>
              <DevInfo>شهر:تهران</DevInfo>
              <DevInfo>beta04@gmail.com:ایمیل من</DevInfo>
            </Grid>
            <Grid xs={0} sm={0} md={4} lg={4} xl={4}>
              <Avatar
                src={man}
                variant="rounded"
                sx={{
                  height: 200,
                  width: 200,
                  margin: "0 auto",
                  display: {
                    xl: "block",
                    lg: "block",
                    md: "block",
                    sm: "none",
                    xs: "none",
                  },
                }}
              >
                N/A
              </Avatar>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};
export default About;
