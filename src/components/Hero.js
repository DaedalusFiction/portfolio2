import { Button, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import mountain2 from "../images/mountain2.jpg";

const Hero = () => {
    return (
        <Box
            className="section"
            sx={{
                // backgroundImage: `url(${earth})`,
                backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)),
  url(${mountain2})`,
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
                        sx={{ color: "white" }}
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
