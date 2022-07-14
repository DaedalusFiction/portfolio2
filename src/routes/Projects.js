import { Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import Project from "../components/Project";
import mountain1 from "../images/mountain1.jpg";

const projects = [
    {
        name: "The Forums",
        website: "https://customforum.netlify.app",
        image: mountain1,
        description: "Customizeable message board made with Redux and Firebase",
        technologies: ["React", "Redux", "MUI", "Firebase"],
    },
];

const Projects = () => {
    return (
        <Box className="section">
            <Container>
                <Typography variant="h1">My Projects</Typography>
                <Grid container>
                    <Grid item xs={12} sm={4}>
                        {projects.map((project) => {
                            return (
                                <Project key={project.name} project={project} />
                            );
                        })}
                    </Grid>
                    <Grid item xs={12} sm={8}>
                        <Typography>test</Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Projects;
