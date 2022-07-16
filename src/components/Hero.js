import { Button, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import mountains4 from "../images/mountains4.avif";
import { primary } from "../themes/primary";

const Hero = () => {
    return (
        <Box
            className="section"
            sx={{
                // backgroundImage: `url(${earth})`,
                backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4)),
  url(${mountains4})`,
                backgroundAttachment: "fixed",
                backgroundSize: "cover",
                height: "100vh",
                display: "flex",
                alignItems: "center",
            }}
        >
            <Container>
                <Box>
                    <Typography
                        className="text-center"
                        variant="h1"
                        sx={{ color: "white" }}
                    >
                        Hello! I'm David Sorensen
                    </Typography>
                    <Typography
                        className="text-center"
                        variant="h5"
                        sx={{ color: primary.palette.custom.lightMuted }}
                    >
                        Full-stack Web Developer based in Central Virginia
                    </Typography>
                    <Box
                        className="flex-center"
                        sx={{ gap: "1em", margin: "1em 0" }}
                    >
                        <Link to="/projects">
                            <Button
                                variant="contained"
                                size="large"
                                tabIndex={-1}
                            >
                                Projects
                            </Button>
                        </Link>
                        <Link to="/contact">
                            <Button
                                variant="contained"
                                color="secondary"
                                size="large"
                                tabIndex={-1}
                            >
                                Contact
                            </Button>
                        </Link>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Hero;
