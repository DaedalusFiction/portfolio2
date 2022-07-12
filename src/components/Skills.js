import { Button, Chip, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { primary } from "../themes/primary";
import mountain1 from "../images/mountain1.jpg";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Link } from "react-router-dom";

const technologies = [
    "React",
    "MUI",
    "Redux",
    "Twitch API",
    "Socket.io",
    "Express.js",
    "npm",
    "Axios",
    "Interaction Observer",
    "Netlify",
    "Github",
];

const About = () => {
    return (
        <Box
            className="section"
            sx={{
                backgroundColor: primary.palette.custom.light,
                display: "flex",
            }}
        >
            <Grid container spacing={5}>
                <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{ display: "flex", alignItems: "center" }}
                >
                    <Box sx={{ margin: "0 5vw" }}>
                        <Typography variant="h3">Technologies</Typography>
                        <Typography component="p" sx={{ marginBottom: "1em" }}>
                            I've built websites from the ground up using a
                            variety of modern technologies, including the
                            following:
                        </Typography>
                        {technologies.map((technology) => {
                            return (
                                <Chip
                                    label={technology}
                                    variant="outlined"
                                    sx={{ margin: " 0 .5em .5em 0" }}
                                />
                            );
                        })}
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={mountain1} alt="snowy mountains" />
                </Grid>
            </Grid>
        </Box>
    );
};

export default About;
