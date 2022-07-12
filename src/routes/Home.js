import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import Hero from "../components/Hero";
import { primary } from "../themes/primary";
import mountain1 from "../images/mountain1.jpg";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const Home = () => {
    return (
        <>
            <Hero />
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
                            <Typography variant="h3">Self-Taught</Typography>
                            <Typography
                                component="p"
                                sx={{ marginBottom: "1em" }}
                            >
                                I've spent the past year teaching myself
                                everything from basic HTML and CSS to React,
                                Redux, and MUI. By learning on my own I've
                                developed an eye for quality sources of
                                information as well as the confidence to tackle
                                new projects and technologies.
                            </Typography>
                            <Button endIcon={<ArrowRightAltIcon />}>
                                See my Projects
                            </Button>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img src={mountain1} alt="snowy mountains" />
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default Home;
