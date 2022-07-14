import { Box, Button, Container, Typography } from "@mui/material";
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

const Footer = () => {
    return (
        <Box
            className="section-small"
            sx={{ backgroundColor: primary.palette.custom.dark }}
        >
            <Container>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "start",
                    }}
                >
                    <Box>
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
                    </Box>
                    <Button onClick={navigateToTop} color="primary">
                        Back to Top
                    </Button>
                </Box>
                <Box className="flex-center" sx={{ gap: ".25em" }}>
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
                                    color: primary.palette.custom.lightMuted,
                                },
                                textDecoration: "underline",
                            }}
                        >
                            David J. Sorensen
                        </Typography>
                    </a>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
