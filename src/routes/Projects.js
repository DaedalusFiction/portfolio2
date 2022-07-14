import { CleaningServices } from "@mui/icons-material";
import { Chip, Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useState } from "react";
import Project from "../components/Project";
import mountain1 from "../images/mountain1.jpg";
import mountain2 from "../images/mountain2.jpg";
import { primary } from "../themes/primary";

const projects = [
    {
        name: "The Forums",
        website: "https://customforum.netlify.app",
        image: mountain1,
        description: "Customizeable message board made with Redux and Firebase",
        technologies: ["React", "Redux", "MUI", "Firebase"],
    },
    {
        name: "The Forums",
        website: "https://customforum.netlify.app",
        image: mountain2,
        description: "Customizeable message board made with Redux and Firebase",
        technologies: ["React", "Redux", "MUI", "Firebase"],
    },
    {
        name: "The Forums",
        website: "https://customforum.netlify.app",
        image: mountain1,
        description: "Customizeable message board made with Redux and Firebase",
        technologies: ["React", "Redux", "MUI", "Firebase"],
    },
];

const Projects = () => {
    const [currentProject, setcurrentProject] = useState(projects[0]);

    return (
        <Box className="section">
            <Container>
                <Typography variant="h1" sx={{ marginBottom: ".5em" }}>
                    My Projects
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={4}>
                        {projects.map((project, index) => {
                            return (
                                <Box
                                    key={index}
                                    onClick={() => {
                                        setcurrentProject(project);
                                    }}
                                    sx={{
                                        borderRadius: "10px",
                                        // marginBottom: ".5em",
                                        padding: "1em 1em",
                                        "&:hover": {
                                            backgroundColor: "white",
                                        },
                                        cursor: "pointer",
                                    }}
                                >
                                    <Typography variant="h6">
                                        {project.name}
                                    </Typography>
                                    {project.technologies.map((technology) => {
                                        return (
                                            <Chip
                                                key={technology}
                                                color="secondary"
                                                label={technology}
                                                sx={{
                                                    margin: ".5em .5em .5em 0",
                                                    cursor: "pointer",
                                                }}
                                            />
                                        );
                                    })}
                                </Box>
                            );
                        })}
                    </Grid>
                    <Grid item xs={12} sm={8}>
                        {currentProject.image && (
                            <img
                                src={currentProject.image}
                                alt="screenshot of website"
                                style={{
                                    borderRadius: primary.borderRadius,
                                    boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)",
                                }}
                            />
                        )}
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Projects;
