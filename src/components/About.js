import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { primary } from "../themes/primary";
import about2 from "../images/about2.avif";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <Box
            className="section"
            sx={{
                backgroundColor: primary.palette.custom.light,
                display: "flex",
            }}
        >
            <Grid container spacing={6}>
                <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{ display: "flex", alignItems: "center" }}
                >
                    <Box sx={{ padding: "0 5vw" }}>
                        <Typography variant="h3">My Journey</Typography>
                        <Typography component="p" sx={{ marginBottom: "1em" }}>
                            I've spent the past few years teaching myself how to
                            build fast, sharp websites. By learning on my own
                            I've developed an eye for quality sources of
                            information as well as the confidence to engage new
                            projects and ideas.
                        </Typography>
                        <Link to="/projects">
                            <Button
                                tabIndex={-1}
                                endIcon={<ArrowRightAltIcon />}
                            >
                                See my Projects
                            </Button>
                        </Link>
                    </Box>
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{ display: { xs: "none", md: "flex" } }}
                >
                    <img
                        style={{
                            borderRadius: `${primary.borderRadius} 0 0 ${primary.borderRadius}`,
                        }}
                        src={about2}
                        alt="snowy mountains"
                    />
                </Grid>
            </Grid>
        </Box>
    );
};

export default About;
