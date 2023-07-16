import { useEffect, useRef, useCallback, useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import bg1 from "../assets/wallhaven-1kpjjw.jpg";
import Typed from "typed.js";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import TextTransition, { presets } from "react-text-transition";
import { links } from "../constants/Particles";
const Home = () => {
  const [index, setIndex] = useState(0);
  const nameEl = useRef(null);
  const infoEl = useRef(null);
  const string = [" ریکت ", " فرانت اند", "فریلنسر"];
  useEffect(() => {
    const typedName = new Typed(nameEl.current, {
      strings: ["رضا عظیمی"],
      startDelay: 1000,
      typeSpeed: 100,
      backSpeed: 20,
      backDelay: 10,
      showCursor: false,
    });

    const stringsTransition = setInterval(() => {
      setIndex((index) => index + 1);
    }, 3000);

    return () => {
      typedName.destroy();
      clearInterval(stringsTransition);
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
        <Box component="div" sx={{ display: "flex" }}>
          <Typography variant="h3" color="#ffCC00">
            {'{{"'}
          </Typography>
          <Typography ref={nameEl} variant="h3" color="#fdd835"></Typography>
          <Typography variant="h3" color="#ffCC00">
            {'"}}'}
          </Typography>
        </Box>

        <Box component="div" sx={{ display: "flex" }}>
          {" "}
          <TextTransition springConfig={presets.wobbly}>
            <Typography
              ref={infoEl}
              variant="h4"
              color="whiteSmoke"
              sx={{
                textDecoration: "underline",
                textDecorationColor: "#fdd835",
                mt: 4,
              }}
            >
              {string[index % string.length]}
            </Typography>
          </TextTransition>
          <Typography variant="h4" color="whitesmoke" sx={{ mt: 4, mr: 1 }}>
            من یک
          </Typography>
        </Box>
      </Box>
    </>
  );
};
export default Home;
