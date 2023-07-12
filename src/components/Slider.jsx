import Grid from "@mui/material/Unstable_Grid2";
import {
  Typography,
  Box,
  Divider,
  Avatar,
  Hidden,
  Tabs,
  Tab,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import {
  HomeRounded,
  Face6Rounded,
  TextSnippetRounded,
  TerminalRounded,
  MessageRounded,
  ConnectWithoutContactRounded,
  FavoriteRounded,
  CopyrightRounded,
} from "@mui/icons-material";
const SideBar = ({ value, handleChange }) => {
  const tabProps = (index) => {
    return {
      id: `sidebar-tab-${index}`,
      "aria-controls": `tabpanel-${index}`,
    };
  };

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
        <Box sx={{ textAlign: "center", justifyContent: "center" }}>
          <Hidden mdDown>
            <Avatar
              src={require("../assets/Avatar.jpg")}
              variant="rounded"
              sx={{ height: "200px", width: "200px", margin: "0 auto", mt: 2 }}
            >
              N/A
            </Avatar>
          </Hidden>

          <Typography
            variant="h5"
            color="whitesmoke"
            sx={{ textAlign: "center" }}
          >
            نام مخاطب
          </Typography>
          <Typography
            variant="caption"
            color="whitesmoke"
            sx={{ textAlign: "center" }}
          >
            توضیحات مخاطب کوتاه و مختصر
          </Typography>
          <Divider variant="middle" color={grey[900]} sx={{ mt: 2 }} />

          <Tabs
            orientation="vertical"
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
            value={value}
            onChange={handleChange}
          >
            <Tab
              label="صفحه اصلی"
              icon={<HomeRounded />}
              iconPosition="start"
              {...tabProps(0)}
            />
            <Tab
              label="در باره من"
              icon={<Face6Rounded />}
              iconPosition="start"
              {...tabProps(1)}
            />
            <Tab
              label="رزومه من"
              icon={<TextSnippetRounded />}
              iconPosition="start"
              {...tabProps(2)}
            />
            <Tab
              label="نمونه کار ها"
              icon={<TerminalRounded />}
              iconPosition="start"
              {...tabProps(3)}
            />
            <Tab
              label="نظرات"
              icon={<MessageRounded />}
              iconPosition="start"
              {...tabProps(4)}
            />
            <Tab
              label="ارتباط با من"
              icon={<ConnectWithoutContactRounded />}
              iconPosition="start"
              {...tabProps(5)}
            />
          </Tabs>
          <Divider variant="middle" color={grey[900]} sx={{ mt: 2 }} />
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "end",
              alignItems: "center",
              height: 100,
            }}
          >
            <Typography variant="subtitle2" color="whitesmoke">
              {" "}
              طراحی شده با{" "}
              <FavoriteRounded
                sx={{ verticalAlign: "middle", color: "tomato", height: 20 }}
              />
            </Typography>
            <Typography variant="caption" color="whitesmoke" sx={{ mt: 2 }}>
              کپی رایت 2023
              <CopyrightRounded sx={{ verticalAlign: "middle", height: 16 }} />
            </Typography>
          </Box>
        </Box>
      </Grid>
    </>
  );
};
export default SideBar;
