import { Avatar, Box, IconButton, Typography } from "@mui/material";
import { RandomReveal } from "react-random-reveal";
import avatar from "../../assets/Avatar.jpg";
import { alphabetPersian } from "../../constants/alphabet";
import ThemeActionButton from "../ThemeActionButton";

import { GitHub, Instagram, Twitter, LinkedIn } from "@mui/icons-material";
const SidebarHeader = () => {
  return (
    <>
      <ThemeActionButton />
      <Avatar
        src={avatar}
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
      <Typography variant="h5" color="whitesmoke" sx={{ textAlign: "center" }}>
        <Typography variant="caption" color="tomato">
          {"{{"}
        </Typography>
        <Typography variant="span" color="text.primary" >
          <RandomReveal
            isPlaying
            duration={4}
            characters="رضا عظیمی"
            characterSet={alphabetPersian}
          />
        </Typography>
        <Typography variant="caption" color="tomato">
          {"}}"}
        </Typography>
      </Typography>
      <Typography variant="caption" color="text.primary" sx={{ textAlign: "center" }}>
        <RandomReveal
          isPlaying
          duration={4}
          characters="برنامه نویس فرانت اند دولوپر"
          characterSet={alphabetPersian}
        />
      </Typography>
      <Box component="div" sx={{ m: "0 auto", textAlign: "center" }}>
        <IconButton aria-label="Github">
          <a
            href="https://github.com/rezaazimibar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHub sx={{ color: "grey" }} />
          </a>
        </IconButton>
        <IconButton aria-label="Github">
          <a
            href="https://github.com/rezaazimibar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram sx={{ color: "grey" }} />
          </a>
        </IconButton>
        <IconButton aria-label="Github">
          <a
            href="https://github.com/rezaazimibar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedIn sx={{ color: "grey" }} />
          </a>
        </IconButton>
        <IconButton aria-label="Github">
          <a
            href="https://github.com/rezaazimibar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter sx={{ color: "grey" }} />
          </a>
        </IconButton>
      </Box>
    </>
  );
};
export default SidebarHeader;
