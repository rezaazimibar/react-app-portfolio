import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import EllipsisText from "react-ellipsis-text";
import {
  Typography,
  Card,
  CardContent,
  Divider,
  Chip,
  Slide,
  CardActionArea,
  CardActions,
  Button,
  CardMedia,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { devEdv } from "../constants/details";
import {
  CodeRounded,
  HomeRepairServiceRounded,
  SchoolRounded,
} from "@mui/icons-material";
import { workSamples } from "../constants/workSamples";

const WorkSamples = ({ helmetTitle }) => {
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
          <Divider
            textAlign="center"
            sx={{
              my: 3,
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
                  نمونه کار ها
                </Typography>
              }
              sx={{ p: 3 }}
            ></Chip>
          </Divider>
          <Grid container sx={{ mx: 3 }}>
            {workSamples.map((course, index) => (
              <Grid key={index} xs={12} sm={6} lg={4} sx={{ px: 2, mb: 2 }}>
                <Slide
                  direction="up"
                  in={loading}
                  style={{
                    transitionDelay: loading ? `${index + 3}99ms` : "0ms",
                  }}
                >
                  <Card sx={{ maxWidth: 345, backgroundColor: "steelblue" }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="200"
                        width="200"
                        image={course.image}
                        alt={course.title}
                      />
                      <CardContent>
                        <Typography
                          variant="body1"
                          textAlign="left"
                          gutterBottom
                        >
                          {course.title}
                        </Typography>
                      </CardContent>
                      <CardContent>
                        <Typography
                          variant="body2"
                          textAlign="left"
                          color="text.secondary"
                          gutterBottom
                          sx={{
                            direction:"ltr"
                          }}
                        >
                          <EllipsisText text={course.info} length={"20"} />
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button
                        href={course.link}
                        size="small"
                        color="primary"
                        target="-blank"
                      >
                        کلید کنید
                      </Button>
                    </CardActions>
                  </Card>
                </Slide>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};
export default WorkSamples;
