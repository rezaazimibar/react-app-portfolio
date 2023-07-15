import { Box, Typography } from "@mui/material";
import bg1 from "../assets/wallhaven-1kpjjw.jpg";

const Home = () => {
  return (
    <>
      <Box
        sx={{
          height: "100vh",
          backgroundImage: `url(${bg1})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h3" color="tomato">
          [[رضا عظیمی]]
        </Typography>
        <Typography
          variant="h4"
          color="whiteSmoke"
          sx={{ textDecoration: "underline", textDecorationColor: "tomato" }}
        >
          توسعه دهنده فرانت اند
        </Typography>
      </Box>
    </>
  );
};
export default Home;
