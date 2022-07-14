import { Divider, Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import { primary } from "../themes/primary";
import typewriter from "../images/typewriter.jpg";
import coffee from "../images/coffee.jpg";
import climbing from "../images/climbing.jpg";
import plant from "../images/plant.jpg";

const skills = [
    {
        skill: "Language",
        description:
            "Having spent years as a developmental and line editor for fiction, I have developed a strong grasp on the semantic and syntactic aspects of the English language.",
        imgURL: typewriter,
    },
    {
        skill: "Interpersonal",
        description:
            "As a server in casual fine dining restaurants I loved the opportunities to welcome and entertain guests while working quickly and efficiently in a team environment.",
        imgURL: coffee,
    },
    {
        skill: "Leadership",
        description:
            "Managing a social group with over four hundred members has shown me how to engage people and help them to feel comfortable with new experiences.",
        imgURL: climbing,
    },
    {
        skill: "Adaptability",
        description:
            "Six months of volunteer work in Nigeria have taught me how to improvise and quickly adapt to new environments.",
        imgURL: plant,
    },
];

const Skills = () => {
    return (
        <Box
            className="section"
            sx={{ backgroundColor: primary.palette.custom.light }}
        >
            <Container>
                <Typography
                    className="text-center"
                    variant="h3"
                    sx={{ marginBottom: "1em" }}
                >
                    Additional Skills
                </Typography>
                <Grid container spacing={10}>
                    {skills.map((skill) => {
                        return (
                            <Grid key={skill.skill} item xs={12} sm={6} md={3}>
                                <Box className="flex-center">
                                    <Box
                                        sx={{
                                            height: "10rem",
                                            width: "10rem",
                                            borderRadius: "50%",
                                            background: `url(${skill.imgURL})`,
                                            backgroundPosition: "center",
                                            backgroundSize: "cover",
                                            filter: "grayscale(80%)",
                                        }}
                                    />
                                </Box>
                                <Typography
                                    variant="h5"
                                    className="text-center"
                                    sx={{
                                        fontWeight: "bold",
                                        marginTop: "1em",
                                        marginBottom: ".5em",
                                    }}
                                >
                                    {skill.skill}
                                </Typography>

                                <Typography
                                    variant="subtitle1"
                                    className="text-center"
                                >
                                    {skill.description}
                                </Typography>
                            </Grid>
                        );
                    })}
                </Grid>
            </Container>
        </Box>
    );
};

export default Skills;
