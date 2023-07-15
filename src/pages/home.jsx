import { useEffect, useRef, useCallback } from "react";
import { Box, Container, Typography } from "@mui/material";
import bg1 from "../assets/wallhaven-1kpjjw.jpg";
import Typed from "typed.js";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { links, hexagon } from "../constants/Particles";
const Home = () => {
  const nameEl = useRef(null);
  const infoEl = useRef(null);
  const string = ["توسعه دهنده ریکت ", "توسعه دهنده فرانت اند", "فریلنسر"];
  useEffect(() => {
    const typedName = new Typed(nameEl.current, {
      strings: ["[[رضا عظیمی]]"],
      typeSpeed: 50,
      backSpeed: 20,
      backDelay: 10,
      showCursor: false,
    });
    const typedInfo = new Typed(infoEl.current, {
      strings: string,
      startDelay: 1000,
      typeSpeed: 80,
      backSpeed: 50,
      backDelay: 50,
      loop: true,
      showCursor: false,
    });
    return () => {
      typedName.destroy();
      typedInfo.destroy();
    };
  }, []);

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);
  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
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
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={links}
        />
        <Typography ref={nameEl} variant="h3" color="tomato"></Typography>
        <Typography
          ref={infoEl}
          variant="h4"
          color="whiteSmoke"
          sx={{ textDecoration: "underline", textDecorationColor: "tomato" }}
        ></Typography>
      </Box>
    </>
  );
};
export default Home;
