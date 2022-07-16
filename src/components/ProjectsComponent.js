import { Chip, Fade, Grid, Slide, Typography } from "@mui/material";
import { convertLength } from "@mui/material/styles/cssUtils";
import { Box, Container } from "@mui/system";
import React, { useState } from "react";
import forumScreencap from "../images/forumScreencap.jpg";
import pfddScreencap from "../images/pfddScreencap.jpg";
import sicktoothScreencap from "../images/sicktoothScreencap.jpg";
import streamerizeScreencap from "../images/streamerizeScreencap.jpg";
import { primary } from "../themes/primary";

const projects = [
    {
        name: "The Forums",
        url: "https://customforum.netlify.app",
        image: forumScreencap,
        description: "Customizeable Message Board Template",
        technologies: ["React", "Redux", "MUI", "Firebase"],
    },
    {
        name: "SICKTOOTH",
        url: "https://www.sicktooth.com",
        image: sicktoothScreencap,
        description: "Literary Journal",
        technologies: ["React", "MUI", "Firebase", "Markdown"],
    },
    {
        name: "KDA PFDD",
        url: "https://www.kdapfdd.net",
        image: pfddScreencap,
        description: "Event page for Patient-Focused Drug Development",
        technologies: ["React", "MUI", "Email.js"],
    },
    {
        name: "Streamerize",
        url: "https://www.streamerize.com",
        image: streamerizeScreencap,
        description:
            "Displays random twitch.tv streams with fewer than ten viewers",
        technologies: ["HTML", "CSS", "API"],
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
    };

    return (
        <Box className="section">
            <Typography
                variant="h1"
                sx={{ marginBottom: ".5em", textAlign: "center" }}
            >
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
                                            ? primary.palette.custom.lightMuted
                                            : "inherit",
                                    "&:hover": {
                                        backgroundColor:
                                            primary.palette.custom.lightMuted,
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
                                            borderRadius: primary.borderRadius,
                                            display: {
                                                xs: "flex",
                                                md: "none",
                                            },
                                        }}
                                    >
                                        <Slide
                                            direction="down"
                                            timeout={{ enter: 550 }}
                                            in={
                                                photoActive &&
                                                project.name ===
                                                    currentProject.name
                                            }
                                        >
                                            <img
                                                className="screencap"
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
                        {currentProject && (
                            <Slide direction="left" in={photoActive}>
                                <a
                                    href={currentProject.url}
                                    target="_BLANK"
                                    rel="noreferrer"
                                >
                                    <img
                                        className="screencap"
                                        onLoad={() => {
                                            setPhotoActive(true);
                                        }}
                                        src={currentProject.image}
                                        alt={`Screenshot of ${currentProject.name} website`}
                                        style={{
                                            borderRadius: primary.borderRadius,
                                        }}
                                    />
                                </a>
                            </Slide>
                        )}
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Projects;
