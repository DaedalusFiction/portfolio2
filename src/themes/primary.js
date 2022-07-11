import { createTheme } from "@mui/material";
import oxanium from "../fonts/oxanium.ttf";

let primary = createTheme({
    palette: {
        background: {
            default: "#171717",
        },
        text: {
            primary: "#f95b2b",
            secondary: "#ff9f82",
        },
        primary: {
            main: "#171717",
        },
        secondary: {
            main: "#F3CA40",
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
            fontSize: "clamp(2rem, 5vw, 5rem)",
        },
        h2: {
            fontFamily: primary.typography.primary.accent,
        },
        h3: {
            fontFamily: primary.typography.primary.accent,
        },
        h5: {
            color: primary.palette.text.secondary,
            fontSize: "clamp(1rem, 1.5vw, 5rem)",
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
