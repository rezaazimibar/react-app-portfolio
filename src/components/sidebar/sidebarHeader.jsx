import { Avatar, Typography } from "@mui/material";
import avatar from "../../assets/Avatar.jpg";
const SidebarHeader = () => {
  return (
    <>
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
        نام مخاطب
      </Typography>
      <Typography
        variant="caption"
        color="whitesmoke"
        sx={{ textAlign: "center" }}
      >
        توضیحات مخاطب کوتاه و مختصر
      </Typography>
    </>
  );
};
export default SidebarHeader;