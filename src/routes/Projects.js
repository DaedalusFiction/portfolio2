import { Box, Container } from "@mui/material";
import React from "react";
import ProjectsComponent from "../components/ProjectsComponent";
import { primary } from "../themes/primary";

const Projects = () => {
    return (
        <Box sx={{ backgroundColor: primary.palette.custom.light }}>
            <Container maxWidth="xl">
                <ProjectsComponent />
            </Container>
        </Box>
    );
};

export default Projects;
