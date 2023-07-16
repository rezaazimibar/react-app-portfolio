export const hexagon = {
  fpsLimit: 60,
  particles: {
    number: {
      value: 160,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#ff0000",
      animation: {
        enable: true,
        speed: 20,
        sync: true,
      },
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
      },
      polygon: {
        nb_sides: 5,
      },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 3,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 20,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 100,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
    life: {
      duration: {
        sync: false,
        value: 3,
      },
      count: 0,
      delay: {
        random: {
          enable: true,
          minimumValue: 0.5,
        },
        value: 1,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 0.8,
      },
      repulse: {
        distance: 200,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
  background: {
    image: "",
    position: "50% 50%",
    repeat: "no-repeat",
    size: "cover",
  },
};
export const links = {
  detectRetina: false,
  fpsLimit: 60,
  interactivity: {
    detectsOn: "canvas",
    events: {
      onHover: {
        enable: true,
        mode: "bubble",
      },
      resize: true,
    },
    modes: {
      bubble: {
        distance: 40,
        duration: 2,
        opacity: 8,
        size: 6,
        speed: 3,
      },
    },
  },
  particles: {
    color: {
      value: "#ffCC00",
      // animation: {
      //   enable: true,
      //   speed: 20,
      //   sync: true,
      // },
    },
    lineLinked: {
      blink: true,
      color: "ffCC00",
      consent: true,
      distance: 30,
      enable: false,
      opacity: 0.3,
      width: 0.5,
    },
    move: {
      attract: {
        enable: false,
        rotate: {
          x: 600,
          y: 1200,
        },
      },
      bounce: false,
      direction: "none",
      enable: true,
      outMode: "bounce",
      random: false,
      speed: 0.5,
      straight: false,
    },
    number: {
      density: {
        enable: false,
        area: 2000,
      },
      limit: 0,
      value: 200,
    },
    opacity: {
      animation: {
        enable: true,
        minimumValue: 0.05,
        speed: 10,
        sync: false,
      },
      random: false,
      value: 1,
    },
    shape: {
      type: "circle",
    },
    size: {
      animation: {
        enable: false,
        minimumValue: 0.1,
        speed: 40,
        sync: false,
      },
      random: true,
      value: 1,
    },
  },
  polygon: {
    draw: {
      enable: true,
      lineColor: "ffCC00",
      lineWidth: 0.3,
    },
    move: {
      radius: 10,
    },
    inlineArrangement: "equidistant",
    scale: 0.5,
    type: "inline",
    url: "https://particles.js.org/images/smalldeer.svg",
  },
};
