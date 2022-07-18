import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { primary } from "../themes/primary";
import { navigateToTop } from "../utils/utils";

const links = [
    {
        text: "The Forums",
        href: "https://customforum.netlify.app",
    },
    {
        text: "Sicktooth",
        href: "https://sicktooth.com",
    },
    {
        text: "Streamerize",
        href: "https://streamerize.com",
    },
    {
        text: "Snack Bar",
        href: "https://snackbarband.com",
    },
];

const credits = [
    {
        photo: "hero",
        photographer: "Mitchell Kmetz",
        service: "unsplash",
    },
    {
        photo: "technologies",
        photographer: "Flipboard",
        service: "unsplash",
    },
    {
        photo: "language",
        photographer: "Laura Rivera",
        service: "unsplash",
    },
    {
        photo: "interpersonal",
        photographer: "Nathan Dumlao",
        service: "unsplash",
    },
    {
        photo: "leadership",
        photographer: "Ahmad",
        service: "unsplash",
    },
    {
        photo: "Adaptability",
        photographer: "Erika Fletcher",
        service: "unsplash",
    },
];

const Footer = () => {
    return (
        <Box
            className="section-small"
            sx={{ backgroundColor: primary.palette.custom.dark }}
        >
            <Container>
                <Grid container spacing={1}>
                    <Grid item xs={12} md={4}>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: { xs: "center", md: "start" },
                            }}
                        >
                            <Typography
                                variant="h6"
                                sx={{
                                    color: primary.palette.custom.light,
                                    marginBottom: "1em",
                                }}
                            >
                                My Websites
                            </Typography>
                            {links.map((item, index) => {
                                return (
                                    <a
                                        key={index}
                                        href={item.href}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <Typography
                                            sx={{
                                                color: primary.palette.custom
                                                    .lightMuted,
                                                fontSize: "1rem",
                                                "&:hover": {
                                                    color: primary.palette
                                                        .custom.light,
                                                },
                                            }}
                                            gutterBottom
                                        >
                                            {item.text}
                                        </Typography>
                                    </a>
                                );
                            })}
                        </Box>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={4}
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "end",
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: ".8rem",
                                color: primary.palette.custom.light,
                            }}
                        >
                            Website created by
                        </Typography>
                        <a
                            href="https://davidjsorensen.com"
                            target="_BLANK"
                            rel="noreferrer"
                        >
                            <Typography
                                sx={{
                                    fontSize: ".8rem",
                                    color: primary.palette.custom.light,
                                    "&:hover": {
                                        color: primary.palette.custom
                                            .lightMuted,
                                    },
                                    textDecoration: "underline",
                                    marginLeft: ".25em",
                                }}
                            >
                                David J. Sorensen
                            </Typography>
                        </a>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={4}
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "end",
                            alignItems: { xs: "center", md: "end" },
                        }}
                    >
                        {credits.map((credit) => (
                            <Typography
                                sx={{
                                    fontSize: ".8rem",
                                    color: primary.palette.custom.lightMuted,
                                    textTransform: "capitalize",
                                }}
                            >
                                {credit.photo} photo by {credit.photographer} on{" "}
                                {credit.service}
                            </Typography>
                        ))}
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Footer;
