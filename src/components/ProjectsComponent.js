import { Chip, Fade, Grid, Slide, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useState } from "react";
import mountain1 from "../images/mountain1.jpg";
import mountain2 from "../images/mountain2.jpg";
import { primary } from "../themes/primary";

const projects = [
    {
        name: "The Forums",
        url: "https://customforum.netlify.app",
        image: mountain1,
        description: "Customizeable message board made with Redux and Firebase",
        technologies: ["React", "Redux", "MUI", "Firebase"],
    },
    {
        name: "SICKTOOTH",
        url: "https://customforum.netlify.app",
        image: mountain2,
        description: "Customizeable message board made with Redux and Firebase",
        technologies: ["React", "Redux", "MUI", "Firebase"],
    },
    {
        name: "KDA PFDD",
        url: "https://customforum.netlify.app",
        image: mountain1,
        description: "Customizeable message board made with Redux and Firebase",
        technologies: ["React", "Redux", "MUI", "Firebase"],
    },
    {
        name: "Freelancing",
        url: "https://customforum.netlify.app",
        image: mountain1,
        description: "Customizeable message board made with Redux and Firebase",
        technologies: ["React", "Redux", "MUI", "Firebase"],
    },
];

const Projects = () => {
    const [currentProject, setCurrentProject] = useState(projects[0]);
    const [photoActive, setPhotoActive] = useState(true);

    const handleClick = (project) => {
        if (project.name === currentProject.name) {
            return;
        }
        setPhotoActive(false);
        setTimeout(() => {
            setCurrentProject(project);
        }, 300);
        setTimeout(() => {
            setPhotoActive(true);
        }, 600);
    };

    return (
        <Box
            className="section"
            sx={{ backgroundColor: primary.palette.custom.light }}
        >
            <Container>
                <Typography variant="h1" sx={{ marginBottom: ".5em" }}>
                    My Projects
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                        {projects.map((project, index) => {
                            return (
                                <Box
                                    key={index}
                                    onClick={() => {
                                        handleClick(project);
                                    }}
                                    sx={{
                                        borderRadius: primary.borderRadius,
                                        // marginBottom: ".5em",
                                        padding: ".5em .75em",
                                        margin: ".25em 0",
                                        backgroundColor:
                                            project.name === currentProject.name
                                                ? primary.palette.custom
                                                      .lightMuted
                                                : "inherit",
                                        "&:hover": {
                                            backgroundColor:
                                                primary.palette.custom
                                                    .lightMuted,
                                        },
                                        cursor: "pointer",
                                    }}
                                >
                                    <Typography variant="h6">
                                        {project.name}
                                    </Typography>
                                    <Typography variant="subtitle2">
                                        {project.description}
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
                                    {currentProject.name === project.name && (
                                        <Box
                                            sx={{
                                                overflow: "hidden",
                                                borderRadius:
                                                    primary.borderRadius,
                                                display: {
                                                    xs: "flex",
                                                    md: "none",
                                                },
                                            }}
                                        >
                                            <Slide
                                                direction="down"
                                                timeout={{ enter: 750 }}
                                                in={
                                                    project.name ===
                                                    currentProject.name
                                                }
                                            >
                                                <img
                                                    src={project.image}
                                                    alt="project screenshot"
                                                />
                                            </Slide>
                                        </Box>
                                    )}
                                </Box>
                            );
                        })}
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={8}
                        sx={{
                            display: { xs: "none", md: "flex" },
                            overflow: "hidden",
                        }}
                    >
                        <Box className="flex-center">
                            {currentProject.image && (
                                <Slide direction="left" in={photoActive}>
                                    <a
                                        href={currentProject.url}
                                        target="_BLANK"
                                        rel="noreferrer"
                                    >
                                        <img
                                            src={currentProject.image}
                                            alt={`Screenshot of ${currentProject.name} website`}
                                            style={{
                                                borderRadius:
                                                    primary.borderRadius,
                                            }}
                                        />
                                    </a>
                                </Slide>
                            )}
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Projects;
