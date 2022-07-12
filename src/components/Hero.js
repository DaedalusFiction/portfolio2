import { Button, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <Box className="section" sx={{ margin: "8rem 0" }}>
            <Container>
                <Box>
                    <Typography className="text-center" variant="h1">
                        Hello! I'm David Sorensen
                    </Typography>
                    <Typography className="text-center" variant="h5">
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
