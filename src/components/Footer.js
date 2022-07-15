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
];

const Footer = () => {
    return (
        <Box
            className="section-small"
            sx={{ backgroundColor: primary.palette.custom.dark }}
        >
            <Container>
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={4}>
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
                                                color: primary.palette.custom
                                                    .light,
                                            },
                                        }}
                                        gutterBottom
                                    >
                                        {item.text}
                                    </Typography>
                                </a>
                            );
                        })}
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={4}
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
                            Website created by{" "}
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
                                }}
                            >
                                David J. Sorensen
                            </Typography>
                        </a>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={4}
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            alignItems: "end",
                        }}
                    >
                        <Button onClick={navigateToTop} color="primary">
                            Back to Top
                        </Button>
                        {credits.map((credit) => (
                            <Typography
                                sx={{
                                    fontSize: ".8rem",
                                    color: primary.palette.custom.light,
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
