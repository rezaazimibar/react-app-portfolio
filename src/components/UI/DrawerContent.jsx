import { grey } from "@mui/material/colors";
import {
  Typography,
  Box,
  Divider,
  Avatar,
  Hidden,
  Tabs,
  Tab,
} from "@mui/material";
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
const tabProps = (index) => {
  return {
    id: `sidebar-tab-${index}`,
    "aria-controls": `tabpanel-${index}`,
  };
};
const DrawerContent = ({ value, handleChange, setDrawerOpen }) => {
  return (
    <>
      <Box sx={{ textAlign: "center", justifyContent: "center" }}>
        <Avatar
          src={require("../../assets/Avatar.jpg")}
          variant="rounded"
          sx={{
            height: "200px",
            width: "200px",
            margin: "0 auto",
            mt: 2,
            display: {
              xs: "none",
              sm: "none",
              md: "block",
              lg: "block",
              xl: "block",
            },
          }}
        >
          N/A
        </Avatar>

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
            onClick={() => setDrawerOpen(false)}
            {...tabProps(0)}
            sx={{
              "&.MuiTab-root": {
                minHeight: 50,
                backgroundColor: grey[800],
                my: 0.5,
                mx: 1,
                borderRadius: 2,
                boxShadow: 3,
              },
            }}
    
          />
          <Tab
            label="در باره من"
            icon={<Face6Rounded />}
            iconPosition="start"
            onClick={() => setDrawerOpen(false)}
            {...tabProps(1)}
            sx={{
              "&.MuiTab-root": {
                minHeight: 50,
                backgroundColor: grey[800],
                my: 0.5,
                mx: 1,
                borderRadius: 2,
                boxShadow: 3,
              },
            }}
       
          />
          <Tab
            label="رزومه من"
            icon={<TextSnippetRounded />}
            iconPosition="start"
            onClick={() => setDrawerOpen(false)}
            {...tabProps(2)}
            sx={{
              "&.MuiTab-root": {
                minHeight: 50,
                backgroundColor: grey[800],
                my: 0.5,
                mx: 1,
                borderRadius: 2,
                boxShadow: 3,
              },
            }}
            
          />
          <Tab
            label="نمونه کار ها"
            icon={<TerminalRounded />}
            iconPosition="start"
            onClick={() => setDrawerOpen(false)}
            {...tabProps(3)}
            sx={{
              "&.MuiTab-root": {
                minHeight: 50,
                backgroundColor: grey[800],
                my: 0.5,
                mx: 1,
                borderRadius: 2,
                boxShadow: 3,
              },
            }}
        
          />
          <Tab
            label="نظرات"
            icon={<MessageRounded />}
            iconPosition="start"
            sx={{
              "&.MuiTab-root": {
                minHeight: 50,
                backgroundColor: grey[800],
                my: 0.5,
                mx: 1,
                borderRadius: 2,
                boxShadow: 3,
              },
            }}
            onClick={() => setDrawerOpen(false)}
            {...tabProps(4)}

          />
          <Tab
            label="ارتباط با من"
            icon={<ConnectWithoutContactRounded />}
            iconPosition="start"
            sx={{
              "&.MuiTab-root": {
                minHeight: 50,
                backgroundColor: grey[800],
                my: 0.5,
                mx: 1,
                borderRadius: 2,
                boxShadow: 3,
              },
            }}
            onClick={() => setDrawerOpen(false)}
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
    </>
  );
};
export default DrawerContent;
