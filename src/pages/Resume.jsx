import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import {
  Typography,
  Card,
  CardContent,
  Divider,
  Chip,
  Slide,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { devEdv } from "../constants/details";
import {
  CodeRounded,
  HomeRepairServiceRounded,
  SchoolRounded,
} from "@mui/icons-material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineContent,
  TimelineConnector,
} from "@mui/lab";

const Resume = ({ helmetTitle }) => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);

    return () => {
      setLoading(false);
    };
  }, []);

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
          <title>{helmetTitle}</title>
        </Helmet>
        <CardContent>
          <Slide
            direction="down"
            in={loading}
            style={{
              transitionDelay: loading ? "200ms" : "0ms",
            }}
          >
            <Divider
              textAlign="center"
              sx={{
                "&::before,&::after": {
                  borderColor: "secondary.main",
                },
              }}
            >
              <Chip
                icon={<CodeRounded />}
                color="secondary"
                label={
                  <Typography
                    variant="body1"
                    color="black"
                    sx={{ textAlign: "center" }}
                  >
                    رزومه من
                  </Typography>
                }
                sx={{ p: 3 }}
              ></Chip>
            </Divider>
          </Slide>

          <Grid container sx={{ mt: 4 }}>
            <Grid xs={6}>
              <Slide
                direction="down"
                in={loading}
                style={{
                  transitionDelay: loading ? "200ms" : "0ms",
                }}
              >
                <Divider
                  textAlign="center"
                  sx={{
                    "&::before, &::after": {
                      borderColor: "warning.main",
                    },
                  }}
                >
                  <Chip
                    color="warning"
                    icon={<HomeRepairServiceRounded />}
                    label={
                      <Typography
                        variant="body"
                        color="black"
                        sx={{ textAlign: "center" }}
                      >
                        تجربیات
                      </Typography>
                    }
                    sx={{ p: 3 }}
                  />
                </Divider>
              </Slide>

              <Timeline position="right" sx={{ direction: "ltr" }}>
                {devEdv.map((item, index) => (
                  <Slide
                    direction="up"
                    in={loading}
                    style={{
                      transitionDelay: loading ? `${index + 1}99ms` : "0ms",
                    }}
                  >
                    <TimelineItem key={index}>
                      <TimelineSeparator>
                        <TimelineDot color="warning" variant="outlined">
                          <HomeRepairServiceRounded color="warning" />
                        </TimelineDot>
                        <TimelineConnector />
                      </TimelineSeparator>
                      <TimelineContent>
                        <Typography variant="caption" color="gray">
                          {item.year}
                        </Typography>
                        <Typography variant="body1" color="black">
                          {item.cert}
                        </Typography>
                        <Typography variant="body2" color="black">
                          {item.major}
                        </Typography>
                        <Typography variant="body2" color="black">
                          {item.place}
                        </Typography>
                      </TimelineContent>
                    </TimelineItem>
                  </Slide>
                ))}
              </Timeline>
            </Grid>
            <Grid xs={6}>
              <Slide
                direction="down"
                in={loading}
                style={{
                  transitionDelay: loading ? "300ms" : "0ms",
                }}
              >
                <Divider
                  textAlign="center"
                  sx={{
                    "&::before, &::after": {
                      borderColor: "info.main",
                    },
                  }}
                >
                  <Chip
                    color="info"
                    icon={<SchoolRounded />}
                    label={
                      <Typography
                        variant="body"
                        color="black"
                        sx={{ textAlign: "center" }}
                      >
                        تحصیلات
                      </Typography>
                    }
                    sx={{ p: 3 }}
                  />
                </Divider>
              </Slide>
              <Timeline position="right" sx={{ direction: "ltr" }}>
                {devEdv.map((item, index) => (
                  <Slide
                    direction="up"
                    in={loading}
                    style={{
                      transitionDelay: loading ? `${index + 1}99ms` : "0ms",
                    }}
                  >
                    <TimelineItem key={index}>
                      <TimelineSeparator>
                        <TimelineDot color="info" variant="outlined">
                          <SchoolRounded color="info" />
                        </TimelineDot>
                        <TimelineConnector />
                      </TimelineSeparator>
                      <TimelineContent>
                        <Typography variant="caption" color="gray">
                          {item.year}
                        </Typography>
                        <Typography variant="body1" color="black">
                          {item.cert}
                        </Typography>
                        <Typography variant="body2" color="black">
                          {item.major}
                        </Typography>
                        <Typography variant="body2" color="black">
                          {item.place}
                        </Typography>
                      </TimelineContent>
                    </TimelineItem>
                  </Slide>
                ))}
              </Timeline>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};
export default Resume;
