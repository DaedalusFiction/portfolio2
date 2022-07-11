import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";

const Hero = () => {
    return (
        <Box>
            <Container>
                <Typography variant="h1">Hello! I'm David Sorensen</Typography>
                <Typography variant="h5">
                    Full-stack Web Developer based in Central Virginia
                </Typography>
            </Container>
        </Box>
    );
};

export default Hero;
