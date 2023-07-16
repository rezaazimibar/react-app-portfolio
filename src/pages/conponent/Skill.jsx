import {
  Divider,
  Chip,
  Box,
  Typography,
  LinearProgress,
  Badge,
} from "@mui/material";
import { HtmlRounded } from "@mui/icons-material";
import { AiFillHtml5 } from "react-icons/ai";

const Skill = ({ icon, color, value, name }) => {
  return (
    <>
      <Divider
        textAlign="right"
        sx={{
          mt: 2,
          "&::before,&::after": {
            borderColor: `${color}.main`,
          },
        }}
      >
        <Chip
          icon={icon}
          color={color}
          label={name}
          sx={{ color: "#000000", p: 3, fontSize: "1.2rem" }}
        />
      </Divider>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={{ minWidth: 35, mr:3 }}>
          <Typography color="black">

            <Badge
              variant="standard"
              badgeContent={`${Math.round(value)}%`}
              color={color}
          
            />
          </Typography>
        </Box>
        <Box sx={{ width: "100%", mr: 1 }}>
          <LinearProgress
            variant="determinate"
            value={value}
            color={color}
            sx={{ height: 10, borderRadius: 2 }}
          />
        </Box>
      </Box>
    </>
  );
};
export default Skill;
