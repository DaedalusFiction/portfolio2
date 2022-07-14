import { createTheme } from "@mui/material";
import oxanium from "../fonts/oxanium.ttf";

let primary = createTheme({
    borderRadius: "15px",
    palette: {
        background: {
            default: "#F7DBA7",
            // default: "#291F1E",
        },
        text: {
            primary: "#19180A",
            // primary: "#82D173",
            secondary: "#3d3a19",
            // secondary: "#ABFAA9",
        },
        primary: {
            main: "#F64740",
        },
        secondary: {
            main: "#3A86FF",
        },
        custom: {
            light: "white",
            // lightMuted: "#e2e2e2",
            lightMuted: "#d0d0d0",
            dark: "#2d2d2d",
        },
    },
    typography: {
        primary: {
            accent: "Oxanium",
        },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: `
        @font-face {
          font-family: 'Oxanium';
          font-style: normal;
          font-display: swap;
          font-weight: 600;
          src: local('Oxanium'), local('Oxanium-regular'), url(${oxanium}) format('truetype');
        }
      `,
        },
    },
});

primary = createTheme(primary, {
    typography: {
        h1: {
            fontFamily: primary.typography.primary.accent,
            fontSize: "clamp(3rem, 5vw, 5rem)",
        },
        h2: {
            fontFamily: primary.typography.primary.accent,
        },
        h3: {
            fontFamily: primary.typography.primary.accent,
        },
        h5: {
            color: primary.palette.text.secondary,
            // fontSize: "clamp(1rem, 2vw, 5rem)",
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {},
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {},
            },
        },
    },
});

export { primary };
