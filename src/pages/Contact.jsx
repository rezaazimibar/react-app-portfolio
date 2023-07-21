import { useEffect, useState } from "react";
import { useFormik } from "formik";

import { useTheme } from "@emotion/react";
import { CodeRounded } from "@mui/icons-material";
import ReCAPTCHA from "react-google-recaptcha";
import {
  Typography,
  Card,
  CardContent,
  Slide,
  Divider,
  Chip,
  TextField,
  InputAdornment,
  CardActions,
  Button,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import {
  Face6Rounded,
  SubjectRounded,
  EmailRounded,
  AccountCircle,
} from "@mui/icons-material";
import { Helmet } from "react-helmet-async";
import { position } from "stylis";
import { contactValidationSchema } from "./validations/ContactValidation";

const Contact = ({ helmetTitle }) => {
  const [loading, setLoading] = useState();
  const theme = useTheme();
  useEffect(() => {
    setLoading(true);
    return () => {
      setLoading(false);
    };
  }, []);
  const contactInputNames = {
    fullname: "",
    email: "",
    object: "",
    message: "",
    recaptcha: "",
  };
  const formik = useFormik({
    initialValues: contactInputNames,
    onSubmit: values => {
      console.log(values);
    },
    validationSchema: contactValidationSchema,
  });
  return (
    <>
      <Card
        sx={{
          height: "100vh",
          backgroundColor: "whitesmoke",
          overflowY: "scroll",
          display: "flex",
          flexDirection: "column",
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
                  borderColor: "warning.main",
                },
              }}
            >
              <Chip
                icon={<CodeRounded />}
                color="warning"
                label={
                  <Typography
                    variant="body1"
                    color="black"
                    sx={{ textAlign: "center" }}
                  >
                    ارتباط بامن
                  </Typography>
                }
                sx={{ p: 3 }}
              ></Chip>
            </Divider>
          </Slide>
          <Grid container sx={{ mt: 5 }}>
            <Slide
              direction="up"
              in={loading}
              style={{ transitionDelay: loading ? "200ms" : "0ms" }}
            >
              <Grid xs={12} md={8}>
                <Card sx={{ justifyContent: "center", alignItems: "center" }}>
                  {/* <form autoComplete="off" onSubmit={formik.handleSubmit}>
                    <CardContent>
                      <Grid container>
                        <Grid sx={{ direction: "ltr" }}>
                          <Grid container spacing={2}>
                            <Grid xs={12} md={6}>
                              <TextField
                                fullWidth
                                size="small"
                                color="warning"
                                label="نام و نام خانوادگی"
                                name="fullname"
                                helperText={
                                  formik.touched.fullname
                                    ? formik.errors.fullname
                                    : null
                                }
                                error={Boolean(
                                  formik.touched.fullname &&
                                    formik.errors.fullname
                                )}
                                value={formik.values?.fullname}
                                
                                onChange={formik.handleChange}
                                variant="outlined"
                                InputProps={{
                                  endAdornment: (
                                    <InputAdornment position="end">
                                      <Face6Rounded />
                                    </InputAdornment>
                                  ),
                                }}
                              />
                            </Grid>
                           
                            <Grid xs={12} md={6}>
                              <TextField
                                
                                size="small"
                                fullWidth
                                color="warning"
                                label="آدرس ایمل"
                                name="email"
                                helperText={
                                  formik.touched.email
                                    ? formik.errors.email
                                    : null
                                }
                                error={Boolean(
                                  formik.touched.email && formik.errors.email
                                )}
                                value={formik.values?.email}
                                onChange={formik.handleChange}
                                variant="outlined"
                                InputProps={{
                                  endAdornment: (
                                    <InputAdornment position="end">
                                      <EmailRounded />
                                    </InputAdornment>
                                  ),
                                }}
                              />
                            </Grid>
                            <Grid xs={12} md={12}>
                              <TextField
                                fullWidth
                                size="small"
                                color="warning"
                                label="عنوان"
                                name="object"
                                helperText={
                                  formik.touched.object
                                    ? formik.errors.object
                                    : null
                                }
                                error={Boolean(
                                  formik.touched.object && formik.errors.object
                                )}
                                value={formik.values?.object}
                                onChange={formik.handleChange}
                                variant="outlined"
                                InputProps={{
                                  endAdornment: (
                                    <InputAdornment position="end">
                                      <EmailRounded />
                                    </InputAdornment>
                                  ),
                                }}
                              />
                            </Grid>
                            <Grid xl={12}>
                              <TextField
                                fullWidth
                                size="small"
                                multiline
                                rows={6}
                                color="warning"
                                label="متن پیام"
                                name="message"
                                helperText={
                                  formik.touched.message
                                    ? formik.errors.message
                                    : null
                                }
                                error={Boolean(
                                  formik.touched.message &&
                                    formik.errors.message
                                )}
                                value={formik.values?.message}
                                onChange={formik.handleChange}
                                variant="outlined"
                                InputProps={{
                                  endAdornment: (
                                    <InputAdornment position="end"></InputAdornment>
                                  ),
                                }}
                              />
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </CardContent>
                    <CardActions
                      sx={{ alignItems: "end", flexDirection: "column" }}
                    >
                      <ReCAPTCHA
                        sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
                        theme={theme.palette.mode}
                        hl="fa"
                        onChange={(value) => {
                          formik.setFieldValue("recaptcha", value);
                        }}
                      />
                      {formik.errors.recaptcha && formik.touched.recaptcha && (
                        <Typography variant="caption" color="error">
                          {formik.errors.recaptcha}
                        </Typography>
                      )}
                      <Button
                        type="submit"
                        color="success"
                        variant="contained"
                        fullWidth
                        sx={{ mt: 2 }}
                      >
                        ارسال
                      </Button>
                    </CardActions>
                  </form> */}
                </Card>
              </Grid>
            </Slide>
            <Slide
              direction="up"
              in={loading}
              style={{ transitionDelay: loading ? "200ms" : "0ms" }}
            >
              <Grid
                xs={0}
                sm={0}
                md={4}
                sx={{ textAlign: "center", backgroundColor: "tomato" }}
              >
                <Typography
                  variant="h6"
                  color="black"
                  sx={{
                    fontFamily: "vazir",
                    mt: 4,
                    display: {
                      xs: "none",
                      sm: "none",
                      md: "block",
                    },
                  }}
                >
                  بیا با هم صحبت کنیم
                </Typography>
                <Typography
                  variant="h6"
                  color="black"
                  sx={{
                    fontFamily: "vazir",
                    mt: 2,
                    display: {
                      xs: "none",
                      sm: "none",
                      md: "block",
                    },
                  }}
                >
                  <a
                    href="www.google.com"
                    alt="email"
                    style={{
                      color: "blue",
                    }}
                  >
                    ایمیل
                  </a>
                  بزن به من
                </Typography>
              </Grid>
            </Slide>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};

export default Contact;
