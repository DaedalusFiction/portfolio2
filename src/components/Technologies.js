import { Button, Chip, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { primary } from "../themes/primary";
import building1 from "../images/building1.jpg";
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

const Technologies = () => {
    return (
        <Box sx={{ padding: { xs: "8rem 0", md: "0" } }}>
            <Grid container spacing={6}>
                <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{ display: { xs: "none", md: "flex" } }}
                >
                    <img
                        src={building1}
                        alt="building with curved architecture"
                    />
                </Grid>
                <Grid className="flex-center" item xs={12} md={6}>
                    <Box sx={{ padding: "0 5vw" }}>
                        <Typography variant="h3">
                            Languages and Tools
                        </Typography>
                        <Typography component="p" sx={{ marginBottom: "1em" }}>
                            I build websites using modern technologies like
                            React and Redux, and I do my best to use only the
                            tools that fit the job.
                        </Typography>
                        <Box>
                            {technologies.map((technology) => {
                                return (
                                    <Chip
                                        key={technology}
                                        color="secondary"
                                        label={technology}
                                        sx={{ margin: " 0 .5em .5em 0" }}
                                    />
                                );
                            })}
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Technologies;
