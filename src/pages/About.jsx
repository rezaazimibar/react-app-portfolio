import { useState, useEffect } from "react";
import { devSkills } from "../constants/Skills";
import {
  Typography,
  Card,
  CardContent,
  Divider,
  Chip,
  Avatar,
} from "@mui/material";
import { Helmet } from "react-helmet-async";

import Grid from "@mui/material/Unstable_Grid2";
import man from "../assets/man.png";
import DevInfo from "./conponent/DevInfo";
import {
  CodeRounded,
  AccessibilityNew,
} from "@mui/icons-material";
import Skill from "./conponent/Skill";
import { from } from "stylis";
const About = () => {
  const [javascript, setJavascript] = useState(0);
  const [html, setHtml] = useState(0);
  const [css, setCss] = useState(0);
  const [react, setReact] = useState(0);
  const [nodeJs, setNodeJs] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setJavascript((oldProgress) => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 40);
      });
      setHtml((oldProgress) => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 60);
      });
      setCss((oldProgress) => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 60);
      });
      setReact((oldProgress) => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 50);
      });
      setNodeJs((oldProgress) => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 10);
      });
    }, 100);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const { htmlSkill, cssSkill, jsSkill, reactSkill, nodeSkill } = devSkills;
  return (
    <>
      <Card
        sx={{
          height: "100vh",
          backgroundColor: "whitesmoke",
          overflowY: "scroll",
        }}
      >
        <Helmet>
          <title>وبسایت رضا عظیمی|درباره من</title>
        </Helmet>
        <CardContent>
          <Grid container sx={{ mx: 3 }}>
            <Grid xs={12} sm={12} md={8} lg={8} xl={8}>
              <Divider
                textAlign="right"
                sx={{
                  "&::before,&::after": {
                    borderColor: "primary.main",
                  },
                }}
              >
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
          <Grid container>
            <Grid sx={{ width: 1, mt: 1 }}>
              <Divider
                textAlign="center"
                sx={{
                  "&::before,&::after": {
                    borderColor: "secondary.main",
                  },
                }}
              >
                <Chip
                  icon={<AccessibilityNew />}
                  color="secondary"
                  label={
                    <Typography
                      variant="body1"
                      color="black"
                      sx={{ textAlign: "center" }}
                    >
                      مهارت های من
                    </Typography>
                  }
                  sx={{ p: 3 }}
                ></Chip>
              </Divider>
              <Skill
                name={htmlSkill.name}
                icon={htmlSkill.icon}
                color={htmlSkill.color}
                value={html}
              />
              <Skill
                name={cssSkill.name}
                icon={cssSkill.icon}
                color={cssSkill.color}
                value={css}
              />
              <Skill
                name={jsSkill.name}
                icon={jsSkill.icon}
                color={jsSkill.color}
                value={javascript}
              />
              <Skill
                name={reactSkill.name}
                icon={reactSkill.icon}
                color={reactSkill.color}
                value={react}
              />
              <Skill
                name={nodeSkill.name}
                icon={nodeSkill.icon}
                color={nodeSkill.color}
                value={nodeJs}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};
export default About;
